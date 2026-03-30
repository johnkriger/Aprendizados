// cria referência ao form e elemento onde será exibida a resposta
const frm = document.querySelector('form')
const resp = document.querySelector('h3')

// ouvinte de evento, acionado quando o botão submit for clicado
frm.addEventListener('submit', (e) => {
    e.preventDefault() // evita o envio do form

    const num = Number(frm.inNumero.value) //obtém o número enviado pelo form
    const raiz = Math.sqrt(num) // tratamento de dados

    if(Number.isInteger(raiz)) {
        resp.innerText = `Raiz quadrada de ${num} é ${raiz}` //mostra raiz
    } else { //senão
        resp.innerText = `Não há raiz quadrada exata para ${num}` // mostra mensagem
    }
})