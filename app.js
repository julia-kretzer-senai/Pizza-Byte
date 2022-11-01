// GET and POST

const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.get('/cardapio.html', (req, res) => {
    res.sendFile(__dirname + '/cardapio.html')
})

app.get('/pedido.html', (req, res) => {
  res.sendFile(__dirname + '/pedido.html')
})

app.get('/salgada.html', (req, res) => {
  res.sendFile(__dirname + '/salgada.html')
})

app.get('/doce.html', (req, res) => {
  res.sendFile(__dirname + '/doce.html')
})

app.get('/bebida.html', (req, res) => {
  res.sendFile(__dirname + '/bebida.html')
})

app.get('/confirma.html', (req, res) => {
  res.sendFile(__dirname + '/confirma.html')
})

app.get('/final.html', (req, res) => {
  res.sendFile(__dirname + '/final.html')
})


app.listen(port, () => {
  console.log(`Peça sua pizza já na porta ${port}!`)
})

