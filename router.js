var express = require('express'),
	router = express.Router(),
	io = require('./socket.js')

/* GET home page. */

var title = "Game"
router.get('/', function(req, res, next) {
  res.render('index', { title });
});

router.get('/game', function(req, res, next) {
	res.render('game', { title })
})

module.exports = router;
