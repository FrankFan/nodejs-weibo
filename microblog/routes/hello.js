var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('hello', { title: 'Hello Express', time: 'the time is ' + new Date().toString(), layout: 'layout' });
});

module.exports = router;