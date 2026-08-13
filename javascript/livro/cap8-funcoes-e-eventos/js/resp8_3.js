const frm = document.querySelector('form') //obtém os elementos da página
const resp = document.querySelector('h3')

const SEM_CONVENIO = 0.1
const AMIGO = 0.2
const SAUDE = 0.5

frm.rbNao.addEventListener('click', () => { //identifica o click na opção de "não"
    frm.inConvenio.className = 'oculta'    
})

frm.rbSim.addEventListener('click', () => {//identifica o click na opção "sim"
    frm.inConvenio.className = 'exibe'    
})

frm.addEventListener('submit', (e) => { //ouvinte de ação
    e.preventDefault()    

    const valor = Number(frm.inValor.value) //recebe o valor do item
    let desconto

    if(frm.rbSim.checked) { //se o campo convênio estiver marcado identifica qual é o plano e o desconto do cliente.
        const num = frm.inConvenio.selectedIndex
        desconto = calcularDesconto(valor, num)
    } else { //se não calcula o desconto padrão
        desconto = calcularDesconto(valor)
    }

    resp.innerText = 'Desconto R$: ' + desconto + '\n\nA pagar: ' + (valor - desconto)

})

//método que calcula o desconto
//valor = valor do produto informado no painel
//opcao = identificador do convênio do cliente
const calcularDesconto = (valor, opcao = null) => { 
    let retorno
    if(opcao == 0) {
        retorno = valor * AMIGO
    } else if (opcao == 1) {
        retorno = valor * SAUDE
    } else {
        retorno = valor * SEM_CONVENIO
    }
    return retorno
}