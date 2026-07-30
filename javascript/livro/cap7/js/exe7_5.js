/**
 * A senha deve:
 * 1) Possuir entre 8 e 15 caracteres
 * 2) No mínimo um número
 * 3) Uma letra minúscula
 * 4) Duas letras maiúsculas
 * 5) Um símbolo
 */

const frm = document.querySelector('form') //obtém elementos da página
const resp = document.querySelector('h3')

frm.addEventListener('submit', (e) => { //ouvinte de envio de informação
    e.preventDefault() //evita o envio do formulário

    const senha = frm.inSenha.value //pega a informação do formulário
    const erros = []
    let retorno = ''

    if(senha.length < 8 || senha.length > 15) { //valida o tamanho
        erros.push('possuir entre 8 e 15 caracteres')
    }

    if(senha.match(/[0-9]/g) == null) { //validação de número
        erros.push('possuir pelo menos um número')
    }

    if(!senha.match(/[a-z]/g)) { //validação letra minúscula
        erros.push('ter pelo menos uma letra minúscula')
    }

    if(!senha.match(/[A-Z]/g) || senha.match(/[A-Z]/g) < 2) { //validação maiúsculas
        erros.push('ter pelo menos 2 letras maiúsculas')
    }

    if(!senha.match(/\W|_/g)) { //validação de símbolos
        erros.push('ter no mínimo um símbolo')
    }

    if(erros.length == 0) { //se a senha atende os requisitos obrigatórios
        retorno = 'Senha aprovada!'
    } else {
        retorno = `Erro! A senha deve obrigatóriamente ${erros.join(', ')}`
    }

    resp.innerText = retorno
})