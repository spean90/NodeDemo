/**
 * Created by Administrator on 2014/10/24.
 */
var d = require('../public/common/Util');
var schedule = require('node-schedule');

var date = new Date("2014-10-24 14:49:20");

console.log(date.format("yyyy-MM-dd HH:mm:ss"));
//一个点执行；

schedule.scheduleJob(date,function(){
    console.log('in..job at time:'+new Date().format("yyyy-MM-dd HH:mm:ss"));
});

//重复执行；
var rule = new schedule.RecurrenceRule();
rule.second = 50;
//rule.minute;
//rule.hour;
//rule.dayOfWeek;
//rule.month;
//rule.date = 24;
//rule.year;
//var job = schedule.scheduleJob(rule,function(){
//    console.log('in.recurrence.job at time:'+new Date().format("yyyy-MM-dd HH:mm:ss"));
//});
//var job2 = schedule.scheduleJob('30 * * * *',function(){
//    console.log('in.recurrence.job2 at time:'+new Date().format("yyyy-MM-dd HH:mm:ss"));
//});