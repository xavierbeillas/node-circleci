var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.type('json');
  res.json({application: 'exaprint_site'});
});

module.exports = router;
