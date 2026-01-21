const prompt = require('prompt-sync')() //adiciona pacote ao programa
const qtdRacao = Number(prompt('Quantidade de ração em kg:')) //lê as entradas
const consumoDiario = Number(prompt('Consumo diário em gramas:'))

const diasDuracao = Math.floor((qtdRacao * 1000) / consumoDiario) //processamento de dados
const sobra = (qtdRacao * 1000) % consumoDiario

console.log(`A ração durará ${diasDuracao} dias`) //exibe os resultados
console.log(`Vai sobrar ${sobra} gramas de ração`)