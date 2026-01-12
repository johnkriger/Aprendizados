// cria referência ao form e aos elementos de resposta pelo id
const frm = document.querySelector('form')
const respCarro = document.querySelector('#outResp1')
const respEtrada = document.querySelector('#outResp2')
const respParcela = document.querySelector('#outResp3')

// cria um ouvinte de evento, acionado quando o botrão submit for clicado
frm.addEventListener('submit', (e) => {
    const carro = frm.marca.value // obtém o conteúdo dos campos do form
    const preco = Number(frm.valor.value)

    const entrada = preco / 2 // calcula o valor da entrada
    const parcela = entrada / 12 // calcula o valor da parcela

    // exibe as respostas
    respCarro.innerText = `Promoção: ${carro}`
    respEtrada.innerText = `Entrada de R$ ${entrada.toFixed(2)}`
    respParcela.innerText = `+ 12x de R$ ${parcela.toFixed(2)}`

    e.preventDefault() // evita o envio do form
})