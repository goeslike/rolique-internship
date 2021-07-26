module.exports = {
    isRoleValid: require('./isRoleValid'), // щоб було в стилі camelCase а не snake-case
    jwtVerifyHelper: require('./jwtVerify.helper'),
    normalizer: require('./normalizer'),
    passwordHasher: require('./password.hasher'),
    queryBuilder: require('./queryBuilder'),
    tokenizer: require('./tokenizer'),
    validatorRole: require('./isRoleValid')
};
