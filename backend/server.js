const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

var weatherApi = require('./routes/weather');

const app = express();

const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/api/weather', weatherApi)

app.listen(port, () => {
	console.log('We are live on ' + port);
});
