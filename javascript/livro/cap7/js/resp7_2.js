const frm = document.querySelector('form') //recebe os elementos do front
const resp = document.querySelector('h3')

frm.addEventListener('submit', (e) => { //ouvinte de evento
    e.preventDefault()

    let inverso = ''
    let retorno = ''
    let frase = frm.inFrase.value //recebe a frase informada pelo usuário
    frase = frase.toUpperCase()

    for(let i = frase.length - 1; i >= 0; i--) {
        inverso += frase[i]
    }
    if(inverso == frase) {
        retorno = `A frase "${frase}" é um palíndromo`
    } else {
        retorno = `A frase "${frase}" não é um palíndromo`
    }
    resp.innerText = retorno
})