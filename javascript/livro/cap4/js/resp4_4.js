// criar vinculo com os elementos do html
const frm = document.querySelector('form')
const permissao = document.querySelector('#outAllow')
const tipo = document.querySelector('#outType')

// adicionar ouvinte de evento para o formulário
frm.addEventListener('submit', (e) => {
    e.preventDefault() //evita o envio do formulário

    const lado1 = Number(frm.side1.value) //obtém o valor do lado 1
    const lado2 = Number(frm.side2.value) //obtém o valor do lado 2
    const lado3 = Number(frm.side3.value) //obtém o valor do lado 3

    let podeOuNaoPode = ''
    let tipoTriangulo = ''

    if (lado1 < lado2 + lado3 && lado2 < lado1 + lado3 && lado3 < lado1 + lado2) {
        podeOuNaoPode = 'Pode formar um triângulo de boas!!'
        if (lado1 == lado2 && lado2 == lado3) {
            tipoTriangulo = 'Equilátero'
        } else if (lado1 != lado2 && lado2 != lado3 && lado3 != lado1) {
            tipoTriangulo = 'Escaleno'
        } else {
            tipoTriangulo = 'Isósceles'
        }
    } else {
        podeOuNaoPode = 'Não pode formar um triângulo!!'
    }

    permissao.innerText = podeOuNaoPode
    tipo.innerText = tipoTriangulo
})