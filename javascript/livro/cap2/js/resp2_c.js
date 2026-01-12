//recebendo dados do formulário
const frm = document.querySelector('form')
const promocao = document.querySelector('#resultado1')
const valor = document.querySelector('#resultado2')

//cria o ouvinte de evento para o botão submit
frm.addEventListener('submit', (e) => {
    const produto = frm.inProd.value //obtém valores dos campos
    const preco = Number(frm.inPreco.value)

    //processamento dos dados
    const desconto = preco / 2
    const valorTotal = (preco * 2) + desconto

    //exibe a resposta na página
    promocao.innerText = `${produto} - Promoção: Leve 3 por R$: ${valorTotal.toFixed(2)}`
    valor.innerText = `O 3º produto sai por R$ ${desconto.toFixed(2)}`

    e.preventDefault() //evita o envio do formulário
})