//recebe dados do formulário
const frm = document.querySelector('form')
const resposta = document.querySelector('#retorno')

//cria o ouvinte de evento para o botão submit
frm.addEventListener('submit', (e) =>{
    const valor = Number(frm.inValor.value) //obtém os valores dos campos
    const tempo = Number(frm.inTempo.value)

    //processamento dos dados 
    const total = Math.round(tempo / 15) * valor

    resposta.innerText = `Total a pagar R$ ${total}`
    e.preventDefault()
})