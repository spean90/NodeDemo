/**
 * Created by Administrator on 2014/9/28.
 */
var MongoClient = require('mongodb').MongoClient;
var format = require('util').format;
var url = format('mongodb://%s:%s@localhost:27017/demodb?w=1&readPreference=primaryPreferred','hsp','hsp');
var mdb;
//var ObjectID = require('mongodb').ObjectID;
//CustomPKFactory = function() {}
//CustomPKFactory.prototype = new Object();
//CustomPKFactory.createPk = function() {
//    global.user_id +=  1;
//    console.log("_id:   "+ global.user_id);
//    return new ObjectID(""+ global.user_id);
//}
MongoClient.connect(url,{
    db: {
        native_parser: false
        //pkFactory :CustomPKFactory
    },
    server: {
        socketOptions: {
            connectTimeoutMS: 500
        },poolSize : 20
    },
    replSet: {},
    mongos: {}
},function(err,database){
    if(err) {
        console.log(err);
        throw err;
    }
    mdb = database;

});
module.exports = function(){
    return mdb;
}
