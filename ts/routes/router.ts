import {Request, Response} from "express";

export class Router {       
    public Router(app): void {          
        app.route('/')
        .all((req: Request, res: Response) => {            
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            })
        })               
    }
}