var express = require('express');
var router = express.Router();

/** Retrieve data from external API */
var Request = require('request');

var Url1 = 'http://api.weatherunlocked.com/api/current/us.';
var Url2 = '?app_id=6fdf098b&app_key=3fbf5b182fe26df5d5eaf744c3311d12';

const retrieveData = (zipcode) => {
	return new Promise(function (resolve, reject) {

		var url = (Url1.concat(zipcode)).concat(Url2);

		Request.get(url, (error, response, body) => {
			if(error)
			{
				resolve( console.dir(error) );
			}
			resolve(JSON.parse(body));
		});

	});
};

router.get('/:zipcode', function(req, res, next) {
	retrieveData(req.params['zipcode'])
		.then((value) => {
			res.send( value );
		});
})

module.exports = router;
