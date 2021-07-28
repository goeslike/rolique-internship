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
    userController.getAllUsers);

router.get('/:id',
    // authMiddleware.checkAccessToken,
    userController.getUserById);

router.post('/',
    authMiddleware.checkAccessToken,
    accessMiddleware.checkRole([
        ADMIN,
        MANAGER
    ], CREATE),
    accessMiddleware.isManager, //  manager неможе створити admin
    imageMiddleware.checkImage,
    imageMiddleware.checkAvatar,
    dynamicMiddleware.checkIsBodyDataValid(userValidator.createUser),
    userController.createUser);

router.put('/:id',
    checkIdValid.checkIsRequestIdValid,
    authMiddleware.checkAccessToken,
    accessMiddleware.checkRole([
        ADMIN,
        MANAGER,
        EMPLOYEE
    ], UPDATE),
    accessMiddleware.isManager, // можна пробувити передати роль на фронт а він уже робить роль admin disabled ?
    dynamicMiddleware.checkIsBodyDataValid(userValidator.updateUser),
    userController.updateUser);

module.exports = router;
