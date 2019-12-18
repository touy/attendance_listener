import { Request, Response,Application } from "express";

export class Router {
    public Router(app:Application): void {
        
        app.route('/')
            .get((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'GET request successfulll!!!!'
                })
            }).post((req: Request, res: Response) => {
                const body = req.body;
                console.log(body);
                res.status(200).send({
                    message: 'GET request successfulll!!!!'
                })
            });
    }
}