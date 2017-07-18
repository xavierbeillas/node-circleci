var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.type('json');
  res.json({application: 'exaprint_type'});
});

router.get('/status', function(req, res) {
  res.type('json');
  res.json({status: 'API is running'});
});

module.exports = router;
