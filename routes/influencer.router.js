const router = require('express').Router();

const {
    accessMiddleware,
    authMiddleware,
    dynamicMiddleware,
    imageMiddleware,
    influencer
} = require('../middlewares');
const { ADMIN, MANAGER } = require('../constants/roles.enum');
const { CREATE } = require('../constants/action.enum');
const { influencerController } = require('../controllers');
const { influencerValidator } = require('../validators');

router.get('/',
    influencerController.getAllInfluencers);

router.get('/:id',
    influencer.checkIsInfluencerExists,
    influencerController.getInfluencerById);

router.post('/',
    // authMiddleware.checkAccessToken,
    // accessMiddleware.checkRole([
    //     ADMIN,
    //     MANAGER
    // ], CREATE),
    imageMiddleware.checkImage,
    imageMiddleware.checkAvatar,
    dynamicMiddleware.checkIsBodyDataValid(influencerValidator.createInfluencer),
    influencerController.createInfluencer);

module.exports = router;
