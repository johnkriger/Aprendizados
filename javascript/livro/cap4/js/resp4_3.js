// criar vínculo com os elementos html
const frm = document.querySelector('form')
const resp1 = document.querySelector('#outTempo')
const resp2 = document.querySelector('#outTroco')

//adicionar ouvinte de evento para o formulário
frm.addEventListener('submit' ,(e) => {
    e.preventDefault() //evita o envio do formulário

    const valor = Number(frm.inValor.value) //obtém o valor do campo de tempo
    let tempo = 0 // variável para armazenar o tempo comprado
    let troco = 0.0 // variável para armazenar o troco)
    if (valor >= 1 && valor < 1.75) {
        tempo = 30
        troco = valor -1
    } else if (valor >= 1.75 && valor < 3) {
        tempo = 60
        troco = valor - 1.75
    } else if (valor >= 3) {
        tempo = 120
        troco = valor -3
    } else {
        alert('Valor mínimo para estacionamento é R$ 1,00!')
        frm.inValor.focus()
    }
    resp1.innerText = `Tempo ${tempo} minutos!`
    resp2.innerText = `Troco R$ ${troco.toFixed(2)}!`
})