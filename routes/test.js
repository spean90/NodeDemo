/**
 * Created by Administrator on 2014/10/10.
 */
//test collections 包含50万条简单数据；
var express = require('express');
var router = express.Router();
var mdb = require('../data/db');
var test = require('assert');

//使用easyui分页查询test collections
router.post('/list',function(req,res){
    var db = new mdb();
    var param = req.body;

    var cursor = db.collection('test').find().sort(['name']).limit(parseInt(param.rows)).skip(parseInt((param.page-1)*param.rows));
    cursor.toArray(function(err,users){
        console.log(users);
        db.collection('test').count(function(err,count){
            var result = {};
            result.rows = users;
            result.total = count;
            res.jsonp(result);
        });

    });

});

//分组操作；
router.route('/group').all(function(req,res){
    var db = new mdb();
    db.collection('test').group(['class'],null,{'count':0},"function(obj,pre){pre.count++;}",function(err,result){
        console.dir(result);
        res.jsonp(result);
    });
});

module.exports = router;