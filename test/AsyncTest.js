/**
 * Created by Administrator on 2014/10/20.
 */

var async = require('async');

var arr = [];

for(var i=0;i<100;i++){
    arr.push(i);
}
//each函数  The iterator is called with an item from the list, and a callback for when it has finished.
// If the iterator passes an error to its callback, the main callback (for the each function) is #### immediately ###### called with the error.
async.each(arr,function(item,callback){
        setTimeout(function(){
            console.log('in.each..'+item);
            if(item>20){
                callback(new Error('>20'));
            }else{
                callback();
            }
        },2000);
    },function(err){
    console.log('in.callback..'+err);
})

