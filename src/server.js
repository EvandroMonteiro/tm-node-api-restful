const express = require('express')
// const path = require('path')

const db = require('./database')
const routes = require('./routes')

const app = express()

// Conectando ao banco de dados
db.connect()

// Habilita server para receber dados json
app.use(express.json())

// Definindo as rotas
app.use('/api', routes)

// Executando o servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Servidor listening on port ${port}`))