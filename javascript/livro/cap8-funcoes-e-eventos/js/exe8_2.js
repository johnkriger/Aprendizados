const frm = document.querySelector('form') //obtém elementos da página
const resp1 = document.querySelector('#outResp1')
const resp2 = document.querySelector('#outResp2')
const resp3 = document.querySelector('#outResp3')

frm.addEventListener('submit', (e) => {
    e.preventDefault()

    const modelo = frm.inModelo.value //obtém o conteúdo dos campos
    const ano = frm.inAno.value
    const valor = frm.inPreco.value

    //chama as funções e atribui o retorno as variáveis 
    const classificacao = calssificarVeiculo(ano)
    const entrada = calculaEntrada(valor, classificacao)
    
    //usa retorno das funções para o cálculo
    const parcela = (valor - entrada) / 10

    //exibição de respostas
    resp1.innerText = modelo + " - " + classificacao
    resp2.innerText = `Entrada R$ ${entrada.toFixed(2)}`
    resp3.innerText = `+ 10x de R$: ${parcela}`
})

//função recebe o ano do veículo por parâmetro
const calssificarVeiculo = (ano) => {
    const anoAtual = new Date().getFullYear() //obtém o ano atual
    let classificacao

    if(ano == anoAtual) { //condições para definir classificação do veículo
        classificacao = 'Novo'    
    } else if(ano == anoAtual -1 || ano == anoAtual -2) {
        classificacao = 'Seminovo'
    } else {
        classificacao = 'Usado'
    }
    return classificacao //retorna o resultado da função
}

//função recebe o valor e o status do veículo como parâmetro
const calculaEntrada = (valor, status) => 
    status == 'Novo' ? valor * 0.5 : valor * 0.3