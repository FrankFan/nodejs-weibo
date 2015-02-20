var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('reg', { title: '用户注册', layout: 'layout' });
});

router.post('/', function(req, res){
	// 检验两次输入的口令是否一致
	console.log(req.body['password']);
	if (req.body['password'] !== req.body['password-repeat']) {
		// req.flash('error', '两次输入的密码不一致');
		res.redirect('./reg');
	}

	// 生成口令散列值

});

module.exports = router;
