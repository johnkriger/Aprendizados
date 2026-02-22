// cria vinculo com o form e os elementos onde serão exibidas as respostas
const frm = document.querySelector('form')
const resp = document.querySelector('h3')

//ouvinte de evento acionado quando o botão submit for clicado
frm.addEventListener('submit', (e) => {
    e.preventDefault() //evita o envio do form

    const valor = Number(frm.inNumero.value) //obtém o valor enviado pelo form
    resposta = (valor % 2 == 0) ? valor + ' é par!' : valor + ' é ímpar!' //verifica se o número é par ou ímpar e armazena a resposta

    resp.innerText = resposta
})