const { Schema, model } = require('mongoose');
const { dataBaseTablesEnum } = require('../constants');

const userSchema = new Schema({
    avatar: {
        type: String
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    password: {
        type: String,
    }
}, { timestamps: true });

module.exports = model(dataBaseTablesEnum.USER, userSchema);
