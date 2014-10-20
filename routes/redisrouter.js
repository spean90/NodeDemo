var express = require('express');
var router = express.Router();
var redis = require("redis"),
    client = redis.createClient();
router.post('/set', function(req, res) {
    var param = req.body;
    console.log("param:"+param);
    client.set(param.key, param.value, redis.print);
    res.send(param);
});
router.post('/get', function(req, res) {
    var param = req.body;
    console.log("param:"+param);
    client.get(param.getkey, function(err, reply) {
        // reply is null when the key is missing
        console.log(reply);
        res.send(reply);
    });
});

module.exports = router;
