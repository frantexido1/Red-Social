import express from 'express';

import userRouter from '../routes/userRouter.js';

class Server {
    constructor() {
        this.app = express();
        this.port = 8080;
    }

    middlewares() {
        this.app.use(express.json());
        this.app.use('/api/users', userRouter);
    }

    iniciarServidor() {
        this.middlewares();
        this.app.listen(this.port, () => {
            console.log('servidor listo');
        });
    }
}

export default Server;