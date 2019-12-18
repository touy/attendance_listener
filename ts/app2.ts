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
        this.routePrv.Router(this.app);
    }

    private config(): void {
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.http = httpserver.createServer(this.app);

    }
}

export default new App().app;