var express = require('express');
var router = express.Router();


//引入对应控制器模块
var whmore1 = require('../controllers/whmore1')

router.get('/', whmore1.index);


module.exports = router;