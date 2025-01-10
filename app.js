const cron = require('node-cron');
const fetchCryptoData = require('./services/fetchCryptoData');


cron.schedule('0 */2 * * *', () => {
    console.log('Fetching the latest data...');
    fetchCryptoData();
});