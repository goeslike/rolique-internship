const {
    Schema,
    model
} = require('mongoose');

const { dataBaseTablesEnum } = require('../constants');

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
        // required: true
    },
    socialProfiles: {
        type: Map,
        of: new Schema({
            username: { type: String, required: true },
            followers: { type: String }
        },
        { _id: false }),
        default: {}
    }
}, {
    timestamps: true,
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
});

module.exports = model(dataBaseTablesEnum.INFLUENCER, InfluencerSchema);
