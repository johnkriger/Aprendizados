const frm = document.querySelector('form') //obtém elementos da página
const resp1 = document.querySelector('#outResp1')
const resp2 = document.querySelector('#outResp2')

let resposta = "" //string com a resposta a ser exibida
let numContas = 0 //inicializa o contador
let valorTotal = 0 // inicializa o acumulador (variáveis globais)

frm.addEventListener('submit', (e) => { //Escuta evento submit do form
    e.preventDefault() //evita o envio do formulário

    const descricao = frm.inDescricao.value // obtém os dados da conta
    const valor = Number(frm.inValor.value)

    numContas++ //adiciona valores ao contador e acumulador
    valorTotal += valor
    resposta += `${descricao} - R$ ${valor.toFixed(2)}\n`
    resp1.innerText = `${resposta} ----------------------`
    resp2.innerText = `${numContas} Contas - Total R$: ${valorTotal.toFixed(2)}`

    frm.inDescricao.value = '' //limpa campos do form
    frm.inValor.value = ''
    frm.inDescricao.focus() //posiciona no campo inDescricao do form
})