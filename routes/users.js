var express = require('express');
var router = express.Router();
var mdb = require('../data/db');
var ObjectID = require('mongodb').ObjectID;

CustomPKFactory = function() {}
CustomPKFactory.prototype = new Object();
CustomPKFactory.createPk = function() {
    global.user_id +=  1;
    console.log("_id:   "+ global.user_id);
    return new ObjectID(""+ global.user_id);
}
/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});


//router.use(function(req,res,next){
//    console.log("in.user....");
//    res.render('error',{error:new Error("test",10000),message:'错误'});
//    //next();
//});
router.get('/list',function(req,res){
    var db = new mdb();
    var cursor = db.collection('person').find();
    cursor.toArray(function(err,users){
        console.log(users);
        res.render('userList',{title:'用户列表',users:users});
    });

});
router.get('/detail/:_id',function(req,res){
    var db = new mdb();
    console.log("_id:"+req.params._id);
    var cursor = db.collection('person').findOne({'_id':new ObjectID(req.params._id)},
    function(err,doc){
        console.log(doc);
        res.render('userDetail',{title:'用户详细',user:doc});
    });
});
router.get('/delete/:_id',function(req,res){
    var db = new mdb();
    console.log("_id:"+req.params._id);
    db.collection('person').remove({'_id':new ObjectID(req.params._id)},
        function(err,numberOfRemovedDocs){
            if(err) throw new Error('删除出错',100);
            res.redirect('/user/list');
        });
});
router.post('/update/:mid',function(req,res){
    var db = new mdb();
    console.log(req.params);
    console.log(req.body);
    console.log(req.query);
    var user = req.body;
    console.log(user.id);
    db.collection("person").update({_id:new ObjectID(user.id)},user,{upsert:false, w: 1}, function (err,result) {
        console.log("err:"+err);
        console.log("result:"+result);
       // res.send("更新返回结果："+result);  //页面显示string
        res.jsonp(user);   //返回结果为对象、页面显示json
    })
});
router.post('/add',function(req,res){
    var db = new mdb();
    console.log(req.params);
    console.log(req.body);
    console.log(req.query);
    var user = req.body;
    db.collection("person").insert(user,{upsert:false, w: 1}, function (err,result) {
        console.log("err:"+err);
        console.log("result:"+result);
        res.redirect('/user/list');
    })
});
module.exports = router;
