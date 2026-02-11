//cria referência ao form e aos elementos onde serão exibidas as respostas
const frm = document.querySelector('form')
const media = document.querySelector('h3')
const situacao = document.querySelector('h4')

//cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener('submit', (e) => {
    const nota1 = Number(frm.note1.value) //obtém os dados digitados no form
    const nota2 = Number(frm.note2.value)
    const nota3 = Number(frm.note3.value)
    const aluno = frm.name.value

    const mediaAluno = (nota1 + nota2 + nota3) / 3 //processamento de dados

    // condição para exibição do resultado
    media.innerText = `Média das notas: ${mediaAluno.toFixed(1)}`
    if (mediaAluno >= 7) {
        situacao.innerText = `Parabéns ${aluno}, você foi aprovado(a)!`
        situacao.style.color = 'green'
    } else {
        situacao.innerText = `Vish ${aluno}, se lascou! Eu falei pra estudar mais...`
        situacao.style.color = 'red'
    }
    e.preventDefault() //evita o envio do form
})