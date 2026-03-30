const prompt = require('prompt-sync')()
const total = Number(prompt('Valor da compra:'))
let parcelamento = Math.floor(total / 20)
let valorParcela

if (parcelamento <= 6) {
    valorParcela = total / parcelamento
} else if (parcelamento > 6) {
    parcelamento = 6
    valorParcela = total / parcelamento
} else {
    parcelamento = 1
    valorParcela = total / parcelamento
}

console.log(`Pagamento pode ser feito em até ${parcelamento}x de R$ ${valorParcela.toFixed(2)}`)