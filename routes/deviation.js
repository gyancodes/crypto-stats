const express = require('express');
const calculateDeviation = require('../services/calculateDeviation');
const router = express.Router();

router.get('/deviation', async (req, res) => {
    const { coin } = req.query;

    if (!coin) {
        return res.status(400).json({ error: 'Coin query parameter is required' });
    }

    try {
        const deviation = await calculateDeviation(coin);
        res.json({ deviation });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;