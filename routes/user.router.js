const router = require('express').Router();

const { userController } = require('../controllers');
const { accessMiddleware, authMiddleware, dynamicMiddleware } = require('../middlewares');
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

module.exports = router;
