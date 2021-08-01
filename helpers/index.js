module.exports = {
    jwtVerifyHelper: require('./jwtVerify.helper'),
    // normalizer: require('./normalizer'),
    passwordHasher: require('./password.hasher'),
    queryBuilder: require('./queryBuilder'),
    tokenizer: require('./tokenizer'),
    conector: require('./conector_DB')
};
