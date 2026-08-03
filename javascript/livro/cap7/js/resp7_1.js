/**
 * 1) Exibir os caracteres das posições pares primeiro
 * 2) Exibir os caracteres das posições impares
 */
const frm = document.querySelector('form') //obtém os dados do front
const resp = document.querySelector('h3') //inserção de respostas no front

let mensagem = ''

frm.addEventListener('submit', (e) => { //ouvinte informando que o processo iniciou
    e.preventDefault()
        
    let pares = ''
    let impares = '' 
    mensagem = frm.inMensagem.value //recebe o valor informado pelo usuário

    for(let i = 0; i < mensagem.length; i++) { //loop percorrendo a mensagem inteira
        if(i % 2 == 0) {
            pares += mensagem[i]
        } else {
            impares += mensagem[i]
        }
    }
    resp.innerText = pares + impares
    frm.inMensagem.value = ''
    frm.inMensagem.focus()
})

frm.btDescriptografar.addEventListener('click', () => {
    resp.innerText = mensagem
})