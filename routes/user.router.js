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
const {
    rolesEnum: { ADMIN, MANAGER, EMPLOYEE },
    actionEnum: { CREATE, UPDATE }
} = require('../constants');

router.get('/',
    authMiddleware.checkAccessToken,
    userController.getAllUsers);
router.post('/',
    authMiddleware.checkAccessToken,
    accessMiddleware.checkRole([
        ADMIN,
        MANAGER
    ], CREATE),
    imageMiddleware.checkImage,
    imageMiddleware.checkAvatar,
    dynamicMiddleware.checkIsBodyDataValid(userValidator.createUser),
    accessMiddleware.isManager, //  manager неможе створити admin
    userController.createUser);
router.post('/:id',
    authMiddleware.checkAccessToken,
    accessMiddleware.checkRole([
        ADMIN,
        MANAGER,
        EMPLOYEE
    ], UPDATE),
    dynamicMiddleware.checkIsBodyDataValid(userValidator.updateUser),
    accessMiddleware.isManager, // можна пробувити передати роль на фронт а він уже робить роль admin disabled ?
    userController.updateUser);

router.get('/:userId', // по якому параметру шукати юзера, щоб відображати деталі інфлуенсера?
    checkIdValid.checkIsUserIdValid,
    dynamicMiddleware.checkIsUserDataExist('userId', 'params', '_id'),
    userController.getUserById);

module.exports = router;
