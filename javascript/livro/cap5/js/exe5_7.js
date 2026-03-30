const frm = document.querySelector('form') //obtém elementos da página
const resp = document.querySelector('#outEspacos')

frm.addEventListener('submit', (e) => { //escuta evento submit do form
    e.preventDefault() //evita o envio do formmulário
    
    const num = Number(frm.inNumero.value) //obtém o número informado
    let estrelas = '' //variável que irá concatenas as estrelas / traços
    
    for (let i=1; i<=num; i++) {//percorre o número de vezes informado
        if (i%2 == 0) { //se o número for par, concatena um traço
            estrelas += '-'
        }else { //se for ímpar, concatena um *
            estrelas += '*'
        }
    }
    resp.innerText = estrelas //exibe a string resultante
})