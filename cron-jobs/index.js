const cron = require('node-cron');
const deleteOldTokens = require('./deleteOldTokens');

module.exports = () => {
    cron.schedule('* * * * *', async () => {
        console.log('CRON RUN');
        await deleteOldTokens();
        console.log('CRON STOP');
    });
};
