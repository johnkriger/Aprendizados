const prompt = require('prompt-sync')() //adiciona pacote ao programa
const salario = Number(prompt('Salário R$:')) //lê as entradas
const tempo = Number(prompt('Tempo em anos:'))
const quadrienio = Math.floor(tempo / 4) //calcula os quadriênios
const aumento = (salario * quadrienio) / 10 //calcula o aumento
const salarioNew = salario + aumento //calcula o novo salário

console.log(`Quadriênios: ${quadrienio}`) //exibe os resultados
console.log(`Salário final R$: ${salarioNew.toFixed(2)}`)