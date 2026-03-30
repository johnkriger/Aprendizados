const prompt = require('prompt-sync')() //adiciona pacote ao programa
const veiculo = prompt('Veículo: ') //lê os dados de entrada
const preco = Number(prompt('Preço R$: '))
const entrada = preco / 2 //calcula a entrada
const parcela = (preco / 2) / 12 //calcula o valor da parcela

console.log(`veículo: ${veiculo}`) //exibe os resultados
console.log(`Entrada R$: ${entrada.toFixed(2)}`)
console.log(` E mais 12x de R$: ${parcela.toFixed(2)}`)
