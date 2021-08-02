const router = require('express').Router();

const { influencerController } = require('../controllers');

router.post('/', influencerController.createInfluencer);

module.exports = router;
