import express, { json, Request, Response } from 'express';
import { rootRouter } from './routes/routeIndex';
import { errorHandler } from './error-handler';
import errorMiddleware from './middleware/error-middleware';

const app = express();

app.use(json());
app.use('/api', rootRouter);


app.get('/', (req:Request,res:Response)=> res.send('running'));

app.use(errorMiddleware)
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`server running in http://localhost:${port}`)
})