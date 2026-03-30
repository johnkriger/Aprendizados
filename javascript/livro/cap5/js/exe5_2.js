//cria vínculo com o form
const frm = document.querySelector('form')
const resp = document.querySelector('h3')

// ouvinte de evento acionado quando botão submit é clicado
frm.addEventListener('submit', (e) => {
    e.preventDefault() // evita o envio do formulário

    const num = Number(frm.number.value) //recebe o número informado no form
    let decrescente = ''

    for (let i=num; i>1; i--){
        decrescente += i + ', '
    }
    decrescente += '1.'
    resp.innerText = decrescente
})