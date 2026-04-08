const frm = document.querySelector('form') //obtém elementos da página
const resp = document.querySelector('#outResp')

frm.addEventListener('submit', (e) => { //Escuta o evento submit do formulário
    e.preventDefault() //evita envio do formulário
    
    const fruta = frm.inFruta.value //obtém o valor do campo de entrada
    const qtd = Number(frm.inQtd.value) //obtém o valor do campo de entrada e converte para número
    let resposta = '' //variável que irá concatenar a resosta

    for (let i=1; i<=qtd; i++) { //percorre o número de vezes informado
        resposta += `${fruta}`
        if(i < qtd) { //se i for maior que 1, concatena a variável fruta e *
            resposta += ' * '
        }
    }
    resp.innerText = resposta //exibe a resposta
})