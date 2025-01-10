const CryptoData = require('../models/CryptoData');

const calculateDeviation = async (coin) => {
    const records = await CryptoData.find({ coinId: coin }).sort({ timestamp: -1 }).limit(100);
    const prices = records.map(record => record.price);

    const mean = prices.reduce((sum, price) => sum + price, 0) / prices.length;
    const variance = prices.reduce((sum, price) => sum + Math.pow(price - mean, 2), 0) / prices.length;
    const deviation = Math.sqrt(variance);

    return deviation;
};

module.exports = calculateDeviation;