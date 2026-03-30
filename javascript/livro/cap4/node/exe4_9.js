const prompt = require('prompt-sync')()

const num = Number(prompt('Número:')) //lê o número

if (num < 100 || num > 999) { //se o número for menor que 100 ou maior que 999
    console.log(`Número ${num} é inválido. digite um número entre 100 e 999`) //mensagem de erro
    return
}

const num1 = Math.floor(num / 100) //calcula o promeiro dígito
const num2 = Math.floor((num % 100) / 10) //calcula o segundo dígito
const num3 = num % 10 //calcula o terceiro dígito

console.log(`Número invertido é ${num3}${num2}${num1}`) //exibe o número invertido