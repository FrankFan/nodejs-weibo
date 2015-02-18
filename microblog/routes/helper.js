var express = require('express');
var router = express.Router();
var util = require('util'); // 视图助手

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('helper', {
		title: 'Helpers',
		content: 'test',
		layout: 'layout'
	});
});

console.log(util.inspect(header));

module.exports = router;