const router = require('express').Router();

const { userController } = require('../controllers');
const { accessMiddleware, authMiddleware, dynamicMiddleware } = require('../middlewares');
const { userValidator } = require('../validators');
const { rolesEnum: { ADMIN, MANAGER } } = require('../constants');

router.post('/',
    authMiddleware.checkAccessToken,
    accessMiddleware.checkRole([
        ADMIN,
        MANAGER
    ]),
    dynamicMiddleware.checkIsBodyDataValid(userValidator.createUser),
    accessMiddleware.isManager, //  manager неможе створити admin
    userController.createUser);

module.exports = router;
