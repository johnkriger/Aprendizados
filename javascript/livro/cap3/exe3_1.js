const prompt = require('prompt-sync')() //adiciona pacote ao programa
const num1 = Number(prompt('1º número:')) //lê os números
const num2 = Number(prompt('2º número:'))

const soma = num1 + num2 //calcula a soma
console.log(`Soma é ${soma}`) //exibe o resultado