const express = require('express')
const cors = require('cors')

const db = require('./database')
const routes = require('./routes')

const app = express()

// Conectando ao banco de dados
db.connect()

const allowedOrigins = [
  'http://127.0.0.1:3000',
  'http://127.0.0.1:4200'
]

// habilita CORS
app.use(cors({
  origin: function (origin, callback) {
    let allowed = true;

    // mobile app for example
    if (!origin) allowed = true;

    if (!allowedOrigins.includes(origin)) allowed = false

    callback(null, allowed)
  }
}))

// Habilita server para receber dados json
app.use(express.json())

// Definindo as rotas
app.use('/api', routes)

// Executando o servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Servidor listening on port ${port}`))