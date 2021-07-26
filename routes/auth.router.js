const router = require('express').Router();

const { authController } = require('../controllers');
const { authMiddleware, dynamicMiddleware } = require('../middlewares');
const { authValidator } = require('../validators');

router.post('/login',
    dynamicMiddleware.checkIsBodyDataValid(authValidator.login),
    dynamicMiddleware.checkIsUserDataExist('email'),
    authController.authUser);

router.post('/refresh', authMiddleware.checkRefreshToken, authController.refreshToken);
router.post('/logout', authMiddleware.checkAccessToken, authController.logoutUser);

module.exports = router;
