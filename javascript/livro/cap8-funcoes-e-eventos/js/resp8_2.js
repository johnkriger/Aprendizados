const frm = document.querySelector('form') //obtém os elementos da página
const resp = document.querySelector('h3')

frm.addEventListener('submit', (e) => { //ouvinte de ação
    e.preventDefault()

    const nome = frm.inNome.value //recebe nome 

    const validacao = validarNome(nome) //chamada de validação
    const sobrenome = obterSobrenome(nome, validacao) //busca de sobrenome
    const num = contarVogais(sobrenome) //conta quantas vogais há no sobrenome

    resp.innerText = 'Senha inicial: ' + sobrenome + num
})

//função para verificar se o nome está completo
validarNome = nome => {
    return nome.includes(' ')
}

//função para extrair o sobrenome
const obterSobrenome = (nome, validacao) => {
    if(!validacao) {
        alert('Deve ser inserido ao menos um sobrenome.')
    }
    let pedacos = nome.split(' ')
    let tam = pedacos.length
    const sobrenome = pedacos[tam-1]
    return sobrenome.toLowerCase()
}

//função para retornar o número de caracteres e garantir que terá pelo menos dois dígitos no retorno
const contarVogais = (sobrenome) => {
    return String(sobrenome.length).padStart(2,'0')
}