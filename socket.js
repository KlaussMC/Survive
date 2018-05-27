'use strict'
var app = require('http').createServer(handler)
var io = require('socket.io')(app);
var fs = require('fs');
// var logmaker = require("logmaker")
// logmaker.enable()

io.socketPort = 3000
app.listen(io.socketPort);

console.log("Server listening on port: " + io.socketPort)

function handler (req, res) {
  fs.readFile(__dirname + '/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index');
    }

    res.writeHead(200);
    res.end(data);
  });
}

io.on('connection', socket => {
	console.log(socket.handshake.address || "Join");

	socket.on('disconnect', e => {
		socket.broadcast.emit('user-left', name)
	})
});

module.exports = io;
