/*
1) programa de caixa eletrônico
2) Ler o valor solicitado para saque (valor "0" encerra o programa)
3) O caixa possui apenas notas de 10R$ (Valores não multiplos de 10 são inválidos)
4) Ao final listar os saques válidos e a soma dos saques
5) Exibir quantos foram os saques inválidos
*/

const prompt = require('prompt-sync')()
console.log('Informe o valor do saque. Digite 0 para encerrar o programa.')

let saquesValidos = [] //iniciar vetor com valores válidos
let saquesInvalidos = 0 //iniciar contador de saques inválidos

do { //loop para ler os valores de saque
    const valor = Number(prompt('Valor do saque: ')) //solicita o valor do saque 
    if (valor === 0) { //verifica se o programa deve ser encerrado
        break
    }
    if (valor % 10 !== 0) { //verifica se o valor é valido para o saque
        console.log('Valor inválido. O caixa dispões apenas notas de 10R$.')
        saquesInvalidos ++ 
    } else { //se o valor for válido
        saquesValidos.push(valor) //adiciona o valor ao vetor de saques válidos
        console.log('Saque realizado com sucesso!')
    }
} while (true)

console.log("\nSaques válidos: ")
saquesValidos.forEach((saque, i) => { //percorre os saques válidos
    console.log(`${i+1}. R$ ${saque}`)
})
let somaSaques = saquesValidos.reduce((total, saque) => total + saque, 0) //soma os valores do vetos de saques
console.log('-'.repeat(40))
console.log(`\nTotal do valor sacado: R$ ${somaSaques}`) //exibe a soma dos saques válidos
console.log('-'.repeat(40))
console.log(`\nTotal de saques inválidos: ${saquesInvalidos}`) //exibe a quantidade de saques inválidos