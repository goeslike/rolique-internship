const {
    Schema,
    model
} = require('mongoose');

const { dataBaseTablesEnum } = require('../constants');

const socialProfilesSchema = new Schema({
    social_profile: String,
    social_profile_followers: Number,
    social_profile_type: String, // треба вказувати тим соц.акаутну інфлуенсера
});

const InfluencerSchema = new Schema({
    avatar: {
        type: String
    },
    instagramPhotos: [String],
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    birthdate: {
        type: Date,
    },
    profession: {
        type: String,
        required: true
    },
    social_profiles: [socialProfilesSchema],

}, {
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
});

module.exports = model(dataBaseTablesEnum.INFLUENCER, InfluencerSchema);
