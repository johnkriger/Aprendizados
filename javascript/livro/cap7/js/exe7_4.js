const frm = document.querySelector('form') //obtém os dados do formulário
const resp = document.querySelector('h3') //obtém os dados do campo de resposta

frm.addEventListener('submit', (e) => { //ouvinte do evento submit
    e.preventDefault() //evita o envio do formulário

    const nome = frm.inFuncionario.value.trim() //captura o nome do funcionário
    if(!nome.includes(' ')){ //verifica se tem espaços no nome
        alert("Deve ser informado o nome completo!")
    }
    const partes = nome.split(' ') //divide o nome nos espaços
    let email = '' //concatena as letras do nome
    const tam = partes.length //tamanho do array

    for(let i = 0; i < tam - 1; i++) { //percorre o array
        email += partes[i].charAt(0) //pega a primeira letra de cada nome
    }
    email += partes[tam-1] + '@gmail.com'

    resp.innerText = `E-mail: ${email.toLowerCase()}` //exibe email em minúsculas
})