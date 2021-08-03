// const { Influencer } = require('../dataBase');

module.exports = (query = {}, model = '') => {
    const { ...filters } = query;
    const keys = Object.keys(filters);
    const filterObject = {};

    if (model === 'user') {
        keys.forEach((key) => {
            switch (key) {
                case 'name':
                    const regex = new RegExp(query.name, 'i');
                    filterObject.name = {
                        $or: [
                            { firstname: { $regex: regex } },
                            { lastname: { $regex: regex } }
                        ]
                    };
                    break;
                default:
                    filterObject[key] = filters[key];
            }
        });
    }

    if (model === 'influencers') {
        keys.forEach((key) => {
            switch (key) {
                case 'name':
                    // const x = Influencer.aggregate([{
                    //     $project: {
                    //         socialProfiles: {
                    //             socialProfiles: '$socialProfiles',
                    //         },
                    //     }
                    // }]);
                    const regex = new RegExp(query.name, 'i');
                    filterObject.name = {
                        $or: [
                            { firstname: { $regex: regex } },
                            { lastname: { $regex: regex } },
                            // { socialProfiles: { $regex: regex } }
                        ]
                    };
                    break;
                default:
                    filterObject[key] = filters[key];
            }
        });
    }

    if (model === 'campaign') {
        keys.forEach((key) => {
            switch (key) {
                case 'budgetGte':
                    filterObject.budget = { ...filterObject.budget, $gte: +filters.budgetGte };
                    break;
                case 'budgetLte':
                    filterObject.budget = { ...filterObject.budget, $lte: +filters.budgetLte };
                    break;
                case 'profitGte':
                    filterObject.profit = { ...filterObject.profit, $gte: +filters.profitGte };
                    break;
                case 'profitLte':
                    filterObject.profit = { ...filterObject.profit, $lte: +filters.profitLte };
                    break;

                default:
                    filterObject[key] = filters[key];
            }
        });
    }

    return {
        filterObject,
    };
};
