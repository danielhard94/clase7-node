const express = require('express');
require('./config/config');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();


// body parse


app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.use(require('./routes/usuario'));

mongoose.connect(process.env.URLDB, { useNewUrlParser: true }, (err, res) => {
    if (err) throw err;
    console.log('BAse de datos online');
});

mongoose.set('useCreateIndex', true);

app.listen(process.env.PORT, () => {
    console.log('escuchando puerto:', 3000);

});