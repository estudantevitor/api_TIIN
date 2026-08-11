import express from 'express'
import cors from 'cors'
import 'dotenv/config'

const port = process.env.API_PORT
const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req,res) => {
    return res.json("API Funcionando!")
})


app.listen(port, () => {
    console.log(`API rodando em http://localhost:${port}`);
})