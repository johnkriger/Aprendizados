const prompt = require('prompt-sync')()
const valor = Number(prompt('Valor: ')) // lê o valor do produto
const num = Number(prompt("Quantidade de parcelas: ")) //lê a quantidade de parcelas
const valorParcela = Math.floor(valor / num) //calcula o valor de cada parcela sem casas decimais
const valorFinal = valorParcela + (valor % num) //calcula a parcela final

for (let i = 1; i < num; i++) { //enquanto i < num
    console.log(`Parcela ${i}: R$ ${valorParcela}`) //imprime o valor da parcela
}
console.log(`Parcela ${num}: R$ ${valorFinal}`) //imprime o valor da última parcela