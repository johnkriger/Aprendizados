// Vinculo com o form e os elementos html
const frm = document.querySelector('form')
const resp = document.querySelector('h3')

// ouvintre de evento acionado quando o botão submit é pressionado
frm.addEventListener('submit' ,(e) => {
    e.preventDefault() //evita o envio do formulário

    const velocidadePermitida = Number(frm.inPermitido.value) //obtém o valor do campo de velocidade permitida
    const velocidadeAtual = Number(frm.inAtual.value) //obtém o valor do campo de velocidade atual

    if (velocidadeAtual <= velocidadePermitida) {
        resp.innerText = 'Tudo dentro da normalidade, mas não faz mais do que a obrigação!!'
    } else if (velocidadeAtual > velocidadePermitida * 1.20) {
        resp.innerText = 'Dançou redondo, multa grave e 5 pontos na carteira!!'
    }else {
        resp.innerText = 'Saiu barato, multa leve e 3 pontos na carteira!!'
    }
})