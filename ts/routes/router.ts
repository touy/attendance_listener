import {Request, Response} from "express";

export class Router {       
    public Router(app): void {          
        app.route('/')
        .get((req: Request, res: Response) => {            
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            })
        }).post((req: Request, res: Response) => {    
            const body = request.body.Body;        
            console.log(body);
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            })
        })                
    }
}