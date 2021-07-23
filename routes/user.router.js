const router = require('express').Router();

const { userController } = require('../controllers');
const { dynamicMiddleware } = require('../middlewares');
const { userValidator } = require('../validators');

router.post('/',
    dynamicMiddleware.checkIsBodyDataValid(userValidator.createUser),
    userController.createUser);

module.exports = router;
