const net = require('net');
const uuidv4 = require('uuid/v4');
const port = 8865;
const host = '0.0.0.0';

const server = net.createServer();

var nano   = require('nano')('http://admin:5martH67@localhost:5984')
  , dbhrusers     = nano.use('hrusers')
  ;
nano.db.create('hrusers', function(err, body) {
  if (!err) {
    console.log('database users created!');
  }
});

server.listen(port, host, () => {
    console.log('Attendance TCP Server is running on port ' + port + '.');
});

let sockets = [];

server.on('connection', function(sock) {
    console.log('CONNECTED: ' + sock.remoteAddress + ':' + sock.remotePort);
    sockets.push(sock);

    sock.on('data', function(data) {
        console.log('DATA ' + sock.remoteAddress + ': ' + data);
        // Write the data back to all the connected, the client will receive it as data from the server
        //sockets.forEach(function(sock, index, array) {
          //  console.log(sock.remoteAddress + ':' + sock.remotePort + " said " + data + '\n');
        //});
        var users = nano.use('hrusers');
        users.insert(data,uuidv4(), function(err, body) {
                if (!err)
                console.log(body);
        });
    });

    // Add a 'close' event handler to this instance of socket
    sock.on('close', function(data) {
        let index = sockets.findIndex(function(o) {
            return o.remoteAddress === sock.remoteAddress && o.remotePort === sock.remotePort;
        })
        if (index !== -1) sockets.splice(index, 1);
        console.log('CLOSED: ' + sock.remoteAddress + ' ' + sock.remotePort);
    });
});
