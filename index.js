import 'dotenv/config';
import express from 'express';

const port = process.env.PORT;
const app = express();

app.use(express.json());

app.get("/", (req, res) =>{
    res.json({
        message: "funcionando",
    })
})

app.get("/teste", (req, res) => {
    res.json({
        message: "testando"
    })
})
app.listen(port);

console.log("backend rodando!")
