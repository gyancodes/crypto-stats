const axios = require('axios');
const CryptoData = require('../models/CryptoData');

const fetchCryptoData = async () => {
    const coins = ['bitcoin', 'matic-network', 'ethereum'];
    const url = 'https://api.coingecko.com/api/v3/simple/price';

    try {
        const response = await axios.get(url, {
            params: {
                ids: coins.join(','),
                vs_currencies: 'usd',
                include_market_cap: true,
                include_24hr_change: true
            }
        });

        for (const coin of coins) {
            const data = response.data[coin];
            const cryptoData = new CryptoData({
                coinId: coin,
                price: data.usd,
                marketCap: data.usd_market_cap,
                change24h: data.usd_24h_change
            });
            await cryptoData.save();
        }
        console.log('Crypto data fetched and saved successfully.');
    } catch (error) {
        console.error('Error fetching crypto data:', error);
    }
};

module.exports = fetchCryptoData;