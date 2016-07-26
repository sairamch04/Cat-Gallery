var express = require('express');
var request = require('request');
var router = express.Router();
var config=require('./config/config');
var raven = require('raven');
var path = require('path');
var relic = require('newrelic');

var apiUrl;
var appDir = path.dirname(require.main.filename);

var client = new raven.Client(config.sentryDsn);
client.patchGlobal();

router.get('/api/animals/:page/', function(req, res) {
    apiUrl = 'https://api.gettyimages.com:443/v3/search/images?page='+req.params.page+'&phrase=cat&page_size=30';
    request.get({
        url : apiUrl,
        headers : {
            'Api-Key' : config.jettyApiKey
        }
    },function(error,response,body) {
        if(!error && response.statusCode == 200) {
            console.log('Sucessfully returned images for page number='+req.params.page);
            res.json(body);
        }
        else {
            client.captureMessage('Unable to fetch result for requested page='+req.params.page);
            res.json('{}');
        }
    });

});
router.get('/', function(req, res) {
    res.sendFile(appDir+'/public/index.html');
});

module.exports = router;
