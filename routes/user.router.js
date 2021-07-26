const router = require('express').Router();

const { userController } = require('../controllers');
const {
    accessMiddleware,
    authMiddleware,
    checkIdValid,
    dynamicMiddleware,
    imageMiddleware
} = require('../middlewares');
const { userValidator } = require('../validators');
const { rolesEnum: { ADMIN, MANAGER } } = require('../constants');

router.get('/', userController.getAllUsers);

router.post('/',
    authMiddleware.checkAccessToken,
    accessMiddleware.checkRole([
        ADMIN,
        MANAGER
    ]),
    imageMiddleware.checkImage,
    imageMiddleware.checkAvatar,
    dynamicMiddleware.checkIsBodyDataValid(userValidator.createUser),
    accessMiddleware.isManager, //  manager неможе створити admin
    userController.createUser);

router.get('/:userId', // по якому параметру шукати юзера, щоб відображати деталі інфлуенсера?
    checkIdValid.checkIsUserIdValid,
    dynamicMiddleware.checkIsUserDataExist('userId', 'params', '_id'),
    userController.getUserById);

module.exports = router;
