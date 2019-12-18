import { Request, Response, Application } from "express";

export class Router {
    public Router(app: Application): void {
        app.post('*', function (req, res) {
            const body = req.body;
            console.log(req);
            // res.status(200).send({
            //     message: 'POST request successfulll!!!!'
            // })
        });
        // app.route('/')
        //     .get((req: Request, res: Response) => {
        //         const body = req.body;
        //         console.log(body);
        //         res.status(200).send({
        //             message: 'GET request successfulll!!!!'
        //         })
        //     }).post((req: Request, res: Response) => {
        //         const body = req.body;
        //         console.log(body);
        //         res.status(200).send({
        //             message: 'GET request successfulll!!!!'
        //         })
        //     });
    }
}