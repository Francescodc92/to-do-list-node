import express, { json, Request, Response } from 'express';

const app = express();

app.use(json());

app.get('/', (req:Request,res:Response)=> res.send('running'));

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`server running in http://localhost:${port}`)
})