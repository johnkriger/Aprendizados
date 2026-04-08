const frm = document.querySelector('form') //obtém os elementos da página
const resp = document.querySelector('#outResp')

frm.addEventListener('submit', (e) => { //escuta o evento submit do formulário
    e.preventDefault() //evita o envio do formulário
    
    let qtd = Number(frm.inQtd.value) //obtém o valor do campo de entrada e converte para número
    const anos = Number(frm.inTempo.value) //obtém o valor do campo de entrada e converte para número
    let resposta = '' //variável que irá copncatenar a resposta

    if(qtd <= 1) { //se a quantidade for menor ou igual a 1 
        resposta = 'A masturbação não faz animais se reproduzirem, deve haver no mínimo dois animais para isso.'
    } else if (anos < 1) { //se o número de anos for menor que 1
        resposta = 'Uma gestação leva tempo. Informe um valor válido.'
    } else {
        for (let i=1; i <= anos; i++) { //percorre o número de vezes informado
            resposta += `${i}º ano: ${qtd} chinchilas\n` //concatena a resposta
            qtd *= 3 //multiplica a quantidade por 3
        }
    }
    resp.innerText = resposta //exibe a resposta
})