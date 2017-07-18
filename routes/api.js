var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.type('json');
  res.json({application: 'exaprint_type'});
});

module.exports = router;
