var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
io.on('connection', function(socket){
  socket.on("message",(message)=>{
    console.log("recieved message: "+message);
  });
});
server.listen(8080);