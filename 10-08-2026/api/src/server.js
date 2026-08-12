import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import * as db from "./config/db.js"

const port = process.env.API_PORT
const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req,res) => {
    return res.json("API Funcionando!")
})

app.get("/clientes/:id", async (req, res) =>{
    const clientes = await db.selectCliente(req.params.id);
    res.json(clientes);
})

app.get("/clientes", async (req, res) =>{
    const clientes = await db.selectClientes();
    res.json(clientes);
})

app.listen(port, () => {
    console.log(`API rodando em http://localhost:${port}`);
})