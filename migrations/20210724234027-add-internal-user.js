const {
    config: {
        INTERN_USER_ROLE,
        INTERN_USER_FIRST_NAME,
        INTERN_USER_LAST_NAME,
        INTERN_USER_EMAIL,
        INTERN_USER_PASSWORD
    }
} = require('../configs');

module.exports = {
    async up(myFirstDatabase) {
        await myFirstDatabase.collection('users').insertOne({
            role: INTERN_USER_ROLE,
            first_name: INTERN_USER_FIRST_NAME,
            last_name: INTERN_USER_LAST_NAME,
            email: INTERN_USER_EMAIL,
            password: INTERN_USER_PASSWORD
        });
    },

    async down(myFirstDatabase) {
        await myFirstDatabase.collection('users').deleteOne({ email: 'admin@rolique.io' });
    }
};
