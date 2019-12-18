"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Router {
    Router(app) {
        app.route('/')
            .all((req, res) => {
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            });
        });
    }
}
exports.Router = Router;
//# sourceMappingURL=router.js.map