const socket = require('socket.io-client')("https://shribeckend.herokuapp.com/");

// socket.on('connection', client => { ... });

function emitSocket(event, data) {
    socket.emit(event, data);
}

function listenSocket(event) {
    console.log("socket complete inn")
    socket.on("check", (data) => {
        console.log("internal client socket response",data )
    });
}

module.exports = {
    emitSocket,
    listenSocket
  };