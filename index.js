const config = require('./config');
const express = require('express');

const app = express();
app.get('/', (req, res) => {
    res.send('Welcome Express App');
});

app.listen(config.PORT, () => {
    console.log("connected at" + config.PORT);
});