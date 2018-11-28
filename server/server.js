const path = require('path');
const http = require('http');
const expres = require('express');
const socketIo = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = expres();
var server = http.createServer(app);
var io = socketIo(server);

app.use(expres.static(publicPath));

io.on('connection', (socket) => {
    console.log("new user connected");

    socket.emit('newMessage', {
        from: 'sinisa',
        text: 'some teht here',
        createdAt: 1234
    });

    socket.on('createMessage', (message)=>{
        console.log('createMesage', message);
    });   

    socket.on('disconnect', () => {
        console.log('disconected from sever');
    });

});

server.listen(port, () => {
    console.log( `Server is up on port ${port}` );
});