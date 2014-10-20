/**
 * Created by Administrator on 2014/9/28.
 *
 * 自己的类继承emitter 抛出"Too Big"事件；
 */
var events = require("events"),
    util = require("util");
function myEvent(){
    events.EventEmitter.call(this);
};

util.inherits(myEvent, events.EventEmitter);


myEvent.prototype.getAmount = function(){
  var amount = (Math.random()*100).toFixed(2);
    console.log('random:'+amount);
    if(amount>50){
        //抛出 “Too Big" 事件  监听器参数为 (err，amount)
        this.emit("Too Big",new Error("随机数大于50！"),amount);
    }
};

module.exports=myEvent;