var express = require('express');
var router = express.Router();
var names = require('../data/MOCK_DATA');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'w/o React', data: names });
});

module.exports = router;
