const prompt = require('prompt-sync')()
console.log('Informe os alunos. Após digite "fim" no nome para sair')
const alunos = [] //declara vetor

do {
    const nome = prompt('Nome: ') //lê o nome
    if (nome == 'fim') { //Verificação antes do loop
        break
    }
    const nota = Number(prompt('Nota: ')) //lẽ a nota
    alunos.push({nome, nota}) //adiciona objeto ao vetor
    console.log('Aluno e nota cadastrados com sucesso!')
} while (true)
console.log('-'.repeat(40))
const maior = alunos.reduce((a,b) => Math.max(a, b.nota), 0) //obtém a maior nota
console.log(`Maior nota: ${maior}`) //exibe a mior nota 

if (maior >= 7 ) { //verificar destaques na turma
    const destaques = alunos.filter(aluno => aluno.nota == maior) //filtro
    for (const destaque of destaques) { //percorre os alunos em destaque
        console.log(`-${destaque.nome}`)
    } 
} else { //senão, exibe mensagem 
    console.log('Turma de burros! Não tem destaques!')
}