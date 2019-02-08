import { Request, Response } from 'express';

export class Demo {

    public routes(app: any): void {
        app.route('/getData')
            .get((req: Request, res: Response) => {
                res.status(200).send({name: 'Aryan', empID: '123456'});
            });
    }
}
