const express = require('express');
const mongoose = require('mongoose');
const statsRouter = require('./routes/stats');
const deviationRouter = require('./routes/deviation');


const app = express();

mongoose.connect('mongodb://localhost:27017/crypto-stats')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(err => {
        console.error('Failed to connect to MongoDB', err);
    });


app.use(express.json());

app.use('/stats', statsRouter);
app.use('/deviation', deviationRouter);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});