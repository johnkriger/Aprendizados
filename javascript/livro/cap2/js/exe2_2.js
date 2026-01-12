// cria referência ao form e aos elementos h3 3 h4 (resposta)
const frm = document.querySelector('form')
const respTitulo = document.querySelector('h3')
const respTime = document.querySelector('h4')

// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener('submit', (e) => {
    const titulo = frm.inTitulo.value // obtém o conteúdo dos campos
    const time = Number(frm.inTimer.value)

    const horas = Math.floor(time / 60) // arredonda para baixo o resultado
    const minutos = time % 60 //obtém o resto da duvisão

    respTitulo.innerText = titulo // exibe as respostas
    respTime.innerText = `${horas} hora(s) e ${minutos} minuto(s)`

    e.preventDefault() // evita envio do form
})