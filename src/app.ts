import * as bodyParser from 'body-parser';
import express from 'express';
import { Demo } from './routes/demo';

class App {

    public app: express.Application;
    public demoRoutes: Demo = new Demo();

    constructor() {
        this.app = express();
        this.config();
        this.demoRoutes.routes(this.app);
    }
    private config(): void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
}
export default new App().app;
