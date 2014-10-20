var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.post('/login', function(req, res) {
    var user = {
        name : req.body.name,
        psw : req.body.psw
    }
    req.session.user = user;
    return res.redirect('/');
});

module.exports = router;
