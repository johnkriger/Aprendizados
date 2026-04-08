const prompt = require('prompt-sync')()
const produto = prompt('Produto: ') //lê o nome do produto
const num = Number(prompt('Quantidade de etiquetas: ')) // lê a quantidade de etiquetas

for (let i = 1; i <= num / 2; i++) { //enquanto o número de etiquetas form menos ou igual a num
    console.log(`${produto.padEnd(30)} ${produto.padEnd(30)}`) //imprime o nome do produto duas vezes    
}
if (num % 2 == 1) { //se o número de entiquetas for ímpar
    console.log(produto) //imprime o nome do produto mais umas vez
}