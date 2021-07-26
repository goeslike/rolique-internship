module.exports = (query = {}, model = '') => {
    const {
        sortBy = 'age', order = 'asc', ...filters
    } = query;
    const keys = Object.keys(filters);
    const orderBy = order === 'asc' ? -1 : 1;
    const sort = { [sortBy]: orderBy };
    const filterObject = {};

    if (model === 'user') {
        keys.forEach((key) => {
            switch (key) {
                case 'name':
                    filterObject.firstname = { $regex: filters.name, $options: 'i' }; // todo serch index text
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
        sort
    };
};
