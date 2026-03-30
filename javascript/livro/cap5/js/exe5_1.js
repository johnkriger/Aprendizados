//cria vínculo com o form
const frm = document.querySelector('form')
const resp = document.querySelector('pre')

// ouvinte de evento acionado quando botão submit é clicado
frm.addEventListener('submit', (e) => {
    e.preventDefault() // evita o envio do formulário

    const num = Number(frm.number.value) //recebe o número informado no form
    let tabuada = ''

    for (let i=1; i<=10; i++){
        tabuada = tabuada + num + "X" + i + "=" + (num*i) + "\n"
    }
    resp.innerText = tabuada
})