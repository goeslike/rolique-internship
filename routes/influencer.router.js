const router = require('express').Router();

const {
    // accessMiddleware,
    // authMiddleware,
    // checkIdValid,
    // dynamicMiddleware,
    imageMiddleware
} = require('../middlewares');
// const { ADMIN, MANAGER } = require('../constants/roles.enum');
// const { CREATE, UPDATE } = require('../constants/action.enum');
const { influencerController } = require('../controllers');
// const { influencerValidator } = require('../validators');

router.post('/',
    // authMiddleware.checkAccessToken,
    // accessMiddleware.checkRole([
    //     ADMIN,
    //     MANAGER
    // ], CREATE),
    imageMiddleware.checkImage,
    imageMiddleware.checkAvatar,
    // dynamicMiddleware.checkIsBodyDataValid(influencerValidator.createInfluencer),
    influencerController.createInfluencer);

router.put('/:id',
    // checkIdValid.checkIsRequestIdValid,
    // authMiddleware.checkAccessToken,
    // accessMiddleware.checkRole([
    //     ADMIN,
    //     MANAGER
    // ], UPDATE),
    // dynamicMiddleware.checkIsBodyDataValid(influencerValidator.updateInfluencer),
    imageMiddleware.checkImage,
    imageMiddleware.checkAvatar,
    influencerController.updateInfluencer);

module.exports = router;
