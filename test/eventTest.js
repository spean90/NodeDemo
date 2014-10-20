/**
 * Created by Administrator on 2014/9/28.
 *
 * 测试自己的类继承emitter，监听抛出的“Too Big"事件
 */
var my = require('../lib/myEvent');
var myEvent = new my();


myEvent.on('Too Big',function(err,amount){
    console.dir('err:'+err);
    console.log('amount:'+amount);
});
myEvent.getAmount();
