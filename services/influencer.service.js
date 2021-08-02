const { Influencer } = require('../dataBase');

module.exports = {
    createInfluencer: (influencer) => Influencer.create(influencer),
};
