const router = require('express').Router();

const { authController } = require('../controllers');
const { authMiddleware, dynamicMiddleware, userMiddleware, } = require('../middlewares');
const { authValidator } = require('../validators');

router.post('/login',
    dynamicMiddleware.checkIsBodyDataValid(authValidator.login),
    userMiddleware.checkIsUserExists,
    authController.authUser);
router.post('/refresh', authMiddleware.checkRefreshToken, authController.refreshToken);
router.post('/logout', authMiddleware.checkAccessToken, authController.logoutUser);

module.exports = router;
