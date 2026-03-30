const frm = document.querySelector('form') //obtém elementos da página
const resp = document.querySelector('h3')

frm.addEventListener('submit', e => { //Escuta evento submit do form
    e.preventDefault() //evita o envio do form
    const num = Number(frm.inNumero.value) //obtém o número informado
    let numDivisores = 0 //declara e inicializa o contador

    for (let i=1; i<=num; i++){ //percorre todos os possíveis divisores de num
        if (num % i == 0) { //verifica se i é divisor de num
            numDivisores ++; // se é, incrementa contador
        }
    }
    if(numDivisores == 2) { //se possui apenas dois divisores, é primo
        resp.innerText = `${num} é primo.`
    } else {
        resp.innerText = `${num} não é primo.`
    }
})