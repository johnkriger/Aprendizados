const frm = document.querySelector('form') //obtém os ele mentos da página
const resp = document.querySelector('pre')


frm.addEventListener('submit', (e) => { //ouvinte do evento
    e.preventDefault()

    const nome = frm.inNome.value //recebe o nome do atleta
    const idade = Number(frm.inIdade.value) //recebe a idade do atleta

    const tracos = retornarTracos(nome)
    const categoria = categorizarAluno(idade)

    resp.innerText = nome + '\n' + tracos + '\nCategoria: ' + categoria

})

//função recebe o nome do atleta por parâmetro
const retornarTracos = (nome) => {
    let tracejado = '' //inicia variável
    for(const caracter of nome) {
        if(caracter != ' ') { //se o caracter não for um espaço vazio insere um traço na variável
            tracejado += '-'
        } else { //se for um espaço vazio insere um espaço vazio na variável
            tracejado += ' '
        }
    }
    return tracejado
}

//função recebe a idade do atleta por parâmetro
const categorizarAluno = (idade) => {
    let categoria = '' //inicialização de categoria
    if(idade <= 12) { //menor ou igual 12 anos Infantil
        categoria = 'Infantil'
    } else if(idade >= 18) {//maior ou igual 18 anos adulto
        categoria = 'Adulto'    
    } else { //não sendo adulto nem infantil é juvenil
        categoria = 'Juvenil'
    }
    return categoria
}