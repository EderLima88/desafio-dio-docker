const express = require('express')
const app = express()
const port = 3000
//mostrar no -p no dockcer a porta


app.ger('/', (req, res) => {
    res.send('Ola docker - Eder')
});

app.list(port, () => {
    console.log(`App rodando na porta: ${port}`)
});

