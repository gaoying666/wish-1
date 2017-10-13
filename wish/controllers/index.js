// index.js 和 routes/index.js是对应的

// 定义对象
var index = {};

// 登录
index.index = function(req, res) {

	res.render('index')
}
// 注册
index.reg = function(req, res) {

	res.render('reg')
}

// 主页
index.homepage = function(req, res) {

	res.render('homepage')
}

//APP
index.intro = function(req, res) {

	res.render('intro')
}

// 微课堂
index.course = function(req, res) {

	res.render('course')
}

// 浏览
index.browse = function(req, res) {

	res.render('browse')
}

 // 微创业
index.create = function(req, res) {

	res.render('create')
}

 // 更多
 index.more = function(req, res) {

	res.render('more')
}

// 向外导出
module.exports = index;