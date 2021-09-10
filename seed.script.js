const { MongoClient } = require('mongodb');

const {
    config: {
        URL_ATLAS,
        INTERN_USER_ROLE,
        INTERN_USER_FIRST_NAME,
        INTERN_USER_LAST_NAME,
        INTERN_USER_EMAIL,
        INTERN_USER_PASSWORD
    }
} = require('./configs');
const { passwordHasher } = require('./helpers');
const { USER, DB_NAME } = require('./constants/dataBase.tables.enums');

async function seedDB() {
    const client = new MongoClient(URL_ATLAS, {
        useNewUrlParser: true
    });

    const hashedPassword = await passwordHasher.hash(INTERN_USER_PASSWORD);

    const admin = {
        role: INTERN_USER_ROLE,
        firstname: INTERN_USER_FIRST_NAME,
        lastname: INTERN_USER_LAST_NAME,
        email: INTERN_USER_EMAIL,
        password: hashedPassword
    };

    try {
        await client.connect();

        const collection = client.db(DB_NAME)
            .collection(USER);

        await collection.drop();
        await collection.insertOne(admin);

        await client.close();
    } catch (err) {
        console.log(err.stack);
    }
}

seedDB();
