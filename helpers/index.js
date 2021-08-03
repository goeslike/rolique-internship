module.exports = {
    connector: require('./conector_DB'),
    instagramApi: require('./instagram.api'),
    jwtVerifyHelper: require('./jwtVerify.helper'),
    passwordHasher: require('./password.hasher'),
    queryBuilder: require('./queryBuilder'),
    tokenizer: require('./tokenizer')
};
