module.exports = {
    isRoleValid: require('./isRoleValid'), // щоб було в стилі camelCase а не snake-case
    jwtVerifyHelper: require('./jwtVerify.helper'),
    passwordHasher: require('./password.hasher'),
    tokenizer: require('./tokenizer'),
    validatorRole: require('./isRoleValid')
};
