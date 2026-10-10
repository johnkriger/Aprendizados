const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
    res.send('Olá, bem vindo!')
})

app.get('/cap12_express', (req, res) => {
    res.send('<h2>Capitulo 12: Introdução ao Express</h2>')
})

//para reconhecer os dados recebidos como sendo um objeto no formato json
app.use(express.json())
app.post('/filmes', (req, res) => {
    //const titulo = req.body.titulo
    //const genero = req.body.genero
    const {titulo, genero} = req.body
    res.send(`Filme: ${titulo} - Gênero: ${genero}, recebido...`)
})

//exemplo de midleware
const log = (req, res, next) => {
    console.log(`.................Acessado em ${new Date()}`)
    next()
}
app.get('/transfere', log, (req, res) => {
    res.send('Transferido com sucesso!')
})

//Arquivo com rotas para o cadastro de livros
const livros = require('./livros')
app.use('/livros', livros) //identificação da rota e da const (require) associada

app.listen(port, () => {
    console.log(`servidor rodando em http:localhost:${port}`)
})
