const cron = require('node-cron');
const deleteTokensWhereUserNull = require('./deleteTokensWhereUserNull');
const deleteTokensWithSomeUsers = require('./deleteTokensWithSomeUsers');

module.exports = () => {
    cron.schedule('* * * * *', async () => {
        console.log('CRON RUN');
        await deleteTokensWhereUserNull();
        await deleteTokensWithSomeUsers();
        console.log('CRON STOP');
    });
};
