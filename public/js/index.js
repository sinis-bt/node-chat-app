var socket = io();

socket.on('connect', function() {
    console.log('connected to sever');
  

});

socket.on('disconnect', function() {
    console.log('disconnected from sever');
});

socket.on('newMessage', function(message){
    console.log('newMessage', message);
});

