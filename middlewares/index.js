module.exports = {
    accessMiddleware: require('./access.middleware'),
    authMiddleware: require('./auth.middleware'),
    checkIdValid: require('./check.id.maddleware'),
    dynamicMiddleware: require('./check.data.dynamic.middleware'),
    imageMiddleware: require('./check.image.middleware'),
    userMiddleware: require('./user.middleware'),
    influencer: require('./isInfluenserPresent')

};
