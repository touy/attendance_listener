import * as express from "express";
import * as bodyParser from "body-parser";
import { Router } from "./routes/router";
import * as socketio from "socket.io";
import * as path from "path";
import * as httpserver from "http";
class App {

    public app: express.Application;
    public routePrv: Router = new Router();
    public http: httpserver.Server;
    // set up socket.io and bind it to our
    // http server.
    public io: socketio.Server;
    private port: string | number = 8865;
    public sockets: any[] = [];
    constructor() {
        this.app = express();
        this.config();
        //this.routePrv.Router(this.app);
        this.listen();
    }

    private config(): void {
        // support application/json type post data
        //this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        //this.app.use(bodyParser.urlencoded({ extended: false }));
        this.http = httpserver.createServer(this.app);
        this.io = socketio(this.http);
    }
    private listen(): void {

        this.io.on('connect', (socket: any) => {
            this.sockets.push(socket);

            this.app.listen(this.port, () => {
                console.log('Running server on port %s', this.port);
            });
            // Write the data back to all the connected, the client will receive it as data from the server
            //sockets.forEach(function(sock, index, array) {
            //  console.log(sock.remoteAddress + ':' + sock.remotePort + " said " + data + '\n');
            //});
            socket.on('message', (m: any) => {
                console.log('[server](message): %s', JSON.stringify(m));
               // this.io.emit('message', m);
            });

            socket.on('disconnect', () => {
                console.log('Client disconnected');
                let index = this.sockets.findIndex(function(o) {
                    return o.remoteAddress === socket.remoteAddress && o.remotePort === socket.remotePort;
                })
                if (index !== -1) this.sockets.splice(index, 1);
                console.log('CLOSED: ' + socket.remoteAddress + ' ' + socket.remotePort);
            });
        });
    }
}

export default new App().app;