import * as express from "express";
import * as bodyParser from "body-parser";
import { Router } from "./routes/router";
import * as socketio from "socket.io";
import * as path from "path";
import * as httpserver from "http";
import * as net from "net";
class App {

    //public app: express.Application;
    public routePrv: Router = new Router();
    // public http: httpserver.Server;
    // set up socket.io and bind it to our
    // http server.
    public io: socketio.Server;
    private port: number = 8865;
    private host: string = "0.0.0.0";
    public sockets: any[] = [];
    public server: net.Server;
    constructor() {
        this.config();
        this.listen();

    }

    private config(): void {
        this.server = net.createServer();
        this.server.listen(this.port, this.host, () => {
            console.log('Attendance TCP Server is running on port ' + this.port + '.');
        });
    }
    private listen(): void {

        this.server.on('connection', function(sock) {
            console.log('CONNECTED: ' + sock.remoteAddress + ':' + sock.remotePort);
            this.sockets.push(sock);
        
            sock.on('data', function(data) {
                console.log('DATA ' + sock.remoteAddress + ': ' + data);
                // Write the data back to all the connected, the client will receive it as data from the server
                this.sockets.forEach(function(sock, index, array) {
                   console.log(sock.remoteAddress + ':' + sock.remotePort + " said " + data + '\n');
                });
            });
        
            // Add a 'close' event handler to this instance of socket
            sock.on('close', function(data) {
                let index = this.sockets.findIndex(function(o) {
                    return o.remoteAddress === sock.remoteAddress && o.remotePort === sock.remotePort;
                })
                if (index !== -1) this.sockets.splice(index, 1);
                console.log('CLOSED: ' + sock.remoteAddress + ' ' + sock.remotePort);
            });
        });
    }
}

export default new App();