// cria referência ao form e aos elementos onde serão exibidas as respostas
const frm = document.querySelector('form')
const resp1 = document.querySelector('#outResp1')
const resp2 = document.querySelector('#outResp2')
const resp3 = document.querySelector('#outResp3')

// Ouvinte de evento, acionado quando o botão submit for clicado
frm.addEventListener('submit', (e) => {
    e.preventDefault() // evita o envio do form

    const valor = Number(frm.inValor.value) // obté, o valor enviado pelo form
    
    if (valor % 10 !=0) { // se o valor não é multiplo de 10
        alert('Valor inválido para notas disponíveis (R$ 100, R$ 50 e R$ 10)') // mensagem de erro
        frm.inValor.focus()
        return
    }
    
    const nota100 = Math.floor(valor / 100) // calcula a quantidade de notas de 100
    let resto = valor % 100 // calcula o valor restante depois de retirar as notas de 100

    const nota50 = Math.floor(resto / 50) // calcula a quantidade de notas de 50
    resto = resto % 50 // calcula o valor restante depoois de retirar as notas de 50

    const nota10 = Math.floor(resto / 10) // Calcula a quantidade de notas de 10
    resto = resto % 10 // calcula o valor restante depois de retirar as notas de 10

    if (nota100 > 0) { // se a quantidade de notas de 100 form maior que zero
        resp1.innerText = `${nota100} notas de R$ 100` // mostra a quantidade de notas de 100
    }

    if (nota50 > 0) { // se a quantodade de notas de 50 for maior que zero
        resp2.innerText = `${nota50} notas de R$ 50` // mostra a quantidade de notas de 50
    }

    if (nota10 > 0) { // se a quantodade de notas de 10 for maior que zero
        resp3.innerText = `${nota10} notas de R$ 10` // mostra a quantidade de notas de 10
    }

})