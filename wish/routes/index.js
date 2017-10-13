var express = require('express');
var router = express.Router();


//引入控制器
var index = require('../controllers/index')

/* GET home page. */
//登录
router.get('/', index.index);

//注册
router.get('/reg', index.reg);

// 主页
router.get('/homepage', index.homepage);

// APP
router.get('/intro', index.intro);

// 微课堂
router.get('/course', index.course);

// 浏览
router.get('/browse',  index.browse);

// 微创业
router.get('/create',  index.create);

// 更多
router.get('/more',  index.more);




module.exports = router;
