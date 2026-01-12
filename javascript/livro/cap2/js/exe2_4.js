//Recebe os elementos do formulário
const frm = document.querySelector('form')
const valor = document.querySelector('#out')

//Cria o ouvinte de evento para o botão submit
frm.addEventListener('submit', (e) => {
    const preco = Number(frm.preco.value) //Obtém o valor dos campos do formulário
    const consumo = Number(frm.peso.value)

    const valorTotal = (preco * consumo) //calcula o valor a ser pago pelo cliente

    //Exibe a resposta
    valor.innerText = `Valor a ser pago: R$ ${valorTotal.toFixed(2)}`

    e.preventDefault() //evita o envio do formulário
})