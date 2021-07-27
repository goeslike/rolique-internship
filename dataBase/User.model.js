const { Schema, model } = require('mongoose');

const { dataBaseTablesEnum } = require('../constants');

const userSchema = new Schema({
    avatar: {
        type: String
    },
    firstname: {
        type: String,
        required: true,
        index: true
    },
    lastname: {
        type: String,
        required: true,
        index: true

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
        required: true
    },
    phone: {
        type: String
    }
}, { timestamps: true, toObject: { virtuals: true }, toJSON: { virtuals: true } });

userSchema.virtual('name').get(function() {
    return `${this.firstname} ${this.lastname}`;
});
 userSchema.index({ firstname: 'text', lastname: 'text' });

module.exports = model(dataBaseTablesEnum.USER, userSchema);
