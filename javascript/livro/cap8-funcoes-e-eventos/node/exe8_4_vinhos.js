const prompt = require('prompt-sync')()

const vinhos = []

function titulo(texto) { //recebe por parâmetro o texto a ser exibido
    console.log()    
    console.log(texto)
    console.log('='.repeat(40))
}

// programa principal
do {
    titulo('===< Cadastro de Vinhos >===')
    console.log('1.Inclusão de vinhos')
    console.log('2.Listagem de vinhos')
    console.log('3.Pesquisa por tipo')
    console.log('4.Média e destaques')
    console.log('5.Finalizar')
    const opcao = Number(prompt("Opção: "))
    if(opcao == 1) {
        incluir()
    } else if(opcao == 2) {
        listar()
    } else if(opcao == 3) {
        pesquisar()
    } else if(opcao == 4) {
        calcularMedia()
    } else {
        break
    }
} while(true)

function incluir() {
    titulo('===< Inclusão de Vinhos>===')

    const marca = prompt('Marca: ') //lê os dados do vinho
    const tipo = prompt('Tipo: ')
    const preco = Number(prompt('Preço R$: '))
    vinhos.push({marca, tipo, preco}) //insere objeto no vetor
    console.log('Ok! Vinho cadastrado com sucesso!')
}

function listar() {
    titulo('===<Lista de Vinhos Cadstrados>===')
    console.log('Marca.............. Tipo............... Preço R$:')

    //percorre o vetor para exibir todos os vinhos

    for (const vinho of vinhos) {
        console.log(`${vinho.marca.padEnd(20)} ${vinho.tipo.padEnd(20)} ` + `${vinho.preco.toFixed(2).padStart(9)}`)
    }
}

function pesquisar() {
    titulo('===< Pesquisa por Tipo de Vinho >===')

    const pesq = prompt('Tipo: ') //lê o tipo do vinho a pesquisar

    let contador = 0 //contador para verificar se existe
    console.log('Marca.............. Tipo............... Preço R$:')

    for (const vinho of vinhos) {
        if(vinho.tipo.toUpperCase().includes(pesq.toUpperCase())) {
            console.log(`${vinho.marca.padEnd(20)} ${vinho.tipo.padEnd(20)} ` + `${vinho.preco.toFixed(2).padStart(9)}`)
            contador ++ //se entrou no if incrementa o contador
        }
    }
    //se percorreu todos os vinhos e contador continua == 0, significa que não há
    if(contador == 0) {
        console.log(`Obs.: Não há vinhos cadastrados do tipo "${pesq}"`)
    }
}

function calcularMedia() {
    titulo('===< Média e destaques do cadastro de vinhos >===')

    const num = vinhos.length //obtém o número de itens cadastrados 
    if(num == 0) {
        console.log('Não há vinhos cadastrados!')
        return
    }

    let total = 0 //para acumular o total
    for(const vinho of vinhos) {
        total += vinho.preco
    }
    const media = total/num //calcula o preco médio

    const vinhos2 = [...vinhos] //cópia do vetor original

    vinhos2.sort((a,b) => a.preco - b.preco) //ordena por preco

    const menor = vinhos2[0] //menor preço
    const maior = vinhos2[num-1] //maior preço

    console.log(`Preço médio dos vinhos R$: ${media.toFixed(2)}`)
    console.log(`Menor valor dos vinhos R$: ${menor.preco.toFixed(2)} - ${menor.marca}`)
    console.log(`Maior valor dos vinhos R$: ${maior.preco.toFixed(2)} - ${maior.marca}`)
}