const router = require('express').Router();

const { userController } = require('../controllers');
const {
    accessMiddleware,
    authMiddleware,
    dynamicMiddleware,
    imageMiddleware,
    checkIdValid
} = require('../middlewares');
const { userValidator } = require('../validators');
const {
    rolesEnum: { ADMIN, MANAGER, EMPLOYEE },
    actionEnum: { CREATE, UPDATE }
} = require('../constants');

router.get('/',
    userController.getAllUsers);

router.get('/:id',
    authMiddleware.checkAccessToken,
    userController.getUserById);

router.post('/',
    authMiddleware.checkAccessToken,
    accessMiddleware.checkRole([
        ADMIN,
        MANAGER
    ], CREATE),
    accessMiddleware.isManager,
    imageMiddleware.checkImage,
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
    accessMiddleware.isManager,
    dynamicMiddleware.checkIsBodyDataValid(userValidator.updateUser),
    imageMiddleware.checkImage,
    userController.updateUser);

module.exports = router;
