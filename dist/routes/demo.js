"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Demo {
    routes(app) {
        app.route('/getData')
            .get((req, res) => {
            res.status(200).send({ name: 'Aryan', empID: '123456' });
        });
    }
}
exports.Demo = Demo;
//# sourceMappingURL=demo.js.map