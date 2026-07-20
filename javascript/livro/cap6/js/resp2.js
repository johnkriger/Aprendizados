/**
 1) Campo para adição de números
 2) Botão para adicionar números
 3) Números repetidos não são permitidos
 4) Exibir os números adicionados
 5) Botão de análisar se os números estão em ordem crescente
  */
 
const frm = document.querySelector('form') // obtenção de dados do front
const resp = document.querySelector('pre')

const num = []

frm.addEventListener('submit', (e) => { //ouvinte para o click de envio dos dados inseridos no front
    e.preventDefault() //evita o envio do form
    novoNum = Number(frm.inNumero.value) //obtém o número inserido para uma variável
    if (!novoNum) { //se a variável estiver vazia
        alert("A informação não pode ser enviada em branco")
    } else if (!num.includes(novoNum)) { // se o número não for repetido
        num.push(novoNum)
    } else { //se o número for repetido
        alert("Esse número já existe no array, por favor escolha outro!")
    }
    frm.reset() //limpa o formulário
    inNumero.focus() //foca no campo de digitação

    let lista = 'Números: '

    for (let i = 0; i < num.length; i++ ) {
        if (i == 0) {
            lista += num[i]
        } else {
            lista += ', ' + num[i]
        }
        
    }
    resp.innerText = lista
})

frm.btOrdem.addEventListener('click', () => {
    let crescente = true
    let message = ''
    for (let i = 0; i < num.length -1; i ++) {
        if (num[i] > num[i + 1]) {
            crescente = false
        }
    }
    if (crescente) {
        message = 'Os números estão em ordem crescente!'
    } else {
        message = 'Os números não estão em ordem crescente!'
    }
    resp.innerText += '\n' + message
})