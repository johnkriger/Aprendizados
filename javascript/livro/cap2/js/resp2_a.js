//recebe elementos do formmulário
const frm = document.querySelector('form')
const promo = document.querySelector('#prm')
const valor = document.querySelector('#vlr')

//cria o ouvinte de evento para o botão sbmit
frm.addEventListener('submit', (e)=> {
    const medicamento = frm.nome.value //obtém os dados dos campos
    const qtd = Number(frm.qtd.value)
    const preco = Number(frm.preco.value)

    //processamento de dados
    if(qtd >= 2) {
        const total = Math.floor(qtd * preco)
        
        promo.innerText = `Promoção de ${medicamento}`
        valor.innerText = `Leve ${qtd} por R$ ${total.toFixed(2)}`
    } else {
        promo.innerText = medicamento
        valor.innerText = `Valor a pagar R$ ${preco.toFixed(2)}`
    }
    e.preventDefault() //evita o envio do formulário
})