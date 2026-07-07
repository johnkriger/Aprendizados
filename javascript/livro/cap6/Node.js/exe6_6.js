const prompt = require('prompt-sync')()
console.log('Informe os clientes. Digite fim para encerrar.')
const chatos = [] //inicializa vetor de clientes

do { // loop para ler os clientes
const nome = (prompt('Informe o nome do chato, digo do cliente: '))
    if (nome == 'fim') { //verifica enceramento do programa
        break
    }
    const idade = Number(prompt('Idade: '))
    chatos.push({nome, idade}) //adiciona objeto ao vetor
    console.log('Cliente cadastrado com sucesso!')
} while (true)
console.log('\nFila dos mais chatos: ')
console.log('-'.repeat(40))
const maisChatos = chatos.filter(chato => chato.idade >= 60) //filtra clientes com idade >= 60
maisChatos.forEach((chato, i) => { //percorre os clientes filtrados
    console.log(`${i+1}. ${chato.nome}`)
})
console.log('\nFila dos chatos: ')
console.log('-'.repeat(40))
const menosChatos = chatos.filter(chato => chato.idade < 60) // filtra clients com idade < 60
menosChatos.forEach((chato, i) => { //percorre os clientes filtrados
    console.log(`${i+1}. ${chato.nome}`)
})