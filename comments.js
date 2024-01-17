// Create web server
// 1. Load http module
var http = require('http');

// 2. Create web server
var server = http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>Comments</h1>');
    res.end('<p>Hello World</p>');
});

// 3. Listen for an HTTP request on port 8000
server.listen(8000);
console.log('Server listening on port 8000');

// 4. Load socket.io module
var io = require('socket.io').listen(server);

// 5. Add a connect listener
io.sockets.on('connection', function(socket) {
    console.log('Client connected.');

    // 6. Emit a message to send it to the client.
    socket.emit('ping', { msg: 'Hello. You are connected!' });

    // 7. Add a disconnect listener
    socket.on('disconnect', function() {
        console.log('Client disconnected.');
    });
});