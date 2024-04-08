import express, {Express, json, Request, Response } from 'express';
import { rootRouter } from './routes/routeIndex';
import errorMiddleware from './middleware/error-middleware';
import { User } from '@prisma/client';

const app:Express = express();

app.use(json());

declare global {
    namespace Express {
        interface Request {
            user?: User;
        }
    }
}

app.use('/api', rootRouter);

app.use(errorMiddleware)
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`server running in http://localhost:${port}`)
})