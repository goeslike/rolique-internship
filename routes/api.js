const router = require('express').Router();
const authRouter = require('./auth.router');
const userRouter = require('./user.router');
const influencerRouter = require('./influencer.router');

router.use('/users', userRouter);
router.use('/auth', authRouter);
router.use('/influencers', influencerRouter);

module.exports = router;
