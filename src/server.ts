import express from 'express';

const app = express();

app.get('/', (req,res)=> res.send('running'));

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`server running in http://localhost:${port}`)
})