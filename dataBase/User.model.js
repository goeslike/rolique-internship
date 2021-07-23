const { Schema, model } = require('mongoose');
const { dataBaseTablesEnum } = require('../constants');

const userSchema = new Schema({
    avatar: {
        type: String
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
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
        // required: true,
        default: 'employee'
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = model(dataBaseTablesEnum.USER, userSchema);
