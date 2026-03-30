const prompt = require('prompt-sync')() //adiciona pacote ao programa

const pessoas = Number(prompt('Quantidade de pessoas:')) //lê o número de pessoas
const peixes = Number(prompt('Quantidade de peixes:')) //lê o número de peixes
const entrada = 20 //valor da entrada
const valorPeixeExtra = 12 //valor a ser pago por cada peixe extra
let total

if (peixes > pessoas) { //se a quantidade de peixes for maior que a quantidade de pessoas
    const peixeExtra = peixes - pessoas // calcula quantos peixes a mais estão sendo levados
    total = (peixeExtra * valorPeixeExtra) + (pessoas * entrada) // calcula o valor total a ser pago em caso de peixes extras
} else { //se a quantidade de peixes for menor ou igual a quantodade de pessoas
    total = pessoas * entrada
}

console.log(`Valor total a pagar é R$ ${total}`) //exibe o total a ser pago, que é apenas o valor da entrada