const frm = document.querySelector('form') //recebe os elementos do front
const resp = document.querySelector('h3')

frm.addEventListener('submit', (e) => { //ouvinte de evento
    e.preventDefault()

    let inverso = ''
    let retorno = ''
    const frase = frm.inFrase.value //recebe a frase informada pelo usuário
    let fraseCopia = frase.toUpperCase()
    fraseCopia = fraseCopia.replaceAll(' ', '')

    for(let i = fraseCopia.length - 1; i >= 0; i--) {
        inverso += fraseCopia[i]
    }
    if(inverso == fraseCopia) {
        retorno = `A frase "${frase.toUpperCase()}" é um palíndromo`
    } else {
        retorno = `A frase "${frase.toUpperCase()}" não é um palíndromo`
    }
    resp.innerText = retorno
})