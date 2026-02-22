// cria referência ao form e elemento onde será exibida a resposta
const frm = document.querySelector('form')
const resp = document.querySelector('h3')

// ouvinte de evento, acionado quando o botão submit for clicado
frm.addEventListener('submit', (e) => {
    e.preventDefault() // evita o envio do form

    // obtém e converte o horário fornecido no form
    const horaBrasil = Number(frm.inHora.value) // obtém os dados do form
    let horaFranca = horaBrasil + 5 // converte para o horário da França

    if(horaFranca >= 24) { // se passar das 24 horas, subtrai 24 para obter o horário correto
        horaFranca = horaFranca - 24
    }

    // apresenta a resposta (altera o conteúdo do elemento h3 da página)
    resp.innerText = `Na França são ${horaFranca.toFixed(2)} horas.`
})