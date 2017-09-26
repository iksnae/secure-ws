// var path = require('path');
// var express = require('express');
// var app = express();
// var server = require('http').createServer(app);
// var io = require('socket.io')(server);


// // app.get('/', function (req, res) {
// //   console.log('return static site')
// // 	res.sendfile(__dirname + '/public/index.html');
// // });


// io.on('connection', function(socket){
//   socket.on("message",(message)=>{
//     console.log("recieved message: "+message);
//   });
// });
// console.log('listening on port 8080');
// server.listen(8080);


// app.use(express.static(path.join(__dirname, 'public')))

// Setup basic express server
var express = require('express');
var app = express();
var path = require('path');
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 80;

server.listen(port, function () {
  console.log('Server listening at port %d', port);
});

// Routing
app.use(express.static(path.join(__dirname, 'public')));


io.on('connection', function (socket) {
  // when the client emits 'new message', this listens and executes
  console.log("on connection")
  socket.emit("hey from server!");
  socket.on('message', function (data) {
    // we tell the client to execute 'new message'
    socket.broadcast.emit('new message', {
      username: socket.username,
      message: data
    });
  });

  // when the user disconnects.. perform this
  socket.on('disconnect', function () {
    console.log("on disconnect")
  });
});