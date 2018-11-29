const path = require('path');
const http = require('http');
const expres = require('express');
const socketIo = require('socket.io');

var {generateMessage} = require('./utils/message');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = expres();
var server = http.createServer(app);
var io = socketIo(server);

app.use(expres.static(publicPath));

io.on('connection', (socket) => {
    console.log("new user connected");

    socket.emit("newMessage", generateMessage('Admin', "Welcome to the chat"));

    socket.broadcast.emit('newMessage', generateMessage('Admin', "New user has joined"));

    socket.on('createMessage', (message)=>{
        console.log('createMesage', message);
        
        io.emit('newMessage', generateMessage(message.from, message.text));

        // socket.broadcast.emit("newMessage", {
        //         from: message.from,
        //         text: message.text,
        //         createdAt: new Date().getTime()
        //     });




    });   

    socket.on('disconnect', () => {
        console.log('disconected from sever');
    });

});

server.listen(port, () => {
    console.log( `Server is up on port ${port}` );
});