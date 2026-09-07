const frm = document.querySelector('form') //obtém elementos da página
const respLista = document.querySelector('pre')
const respCavalo = document.querySelector('#outCavalo')

//nome dos cavalos participantes do páreo
const CAVALOS = ['Ted', 'Rex', 'Lupy', 'Bilu', 'Fredy']

//vetor que irá armazenar um objeto aposta, com o n° do cavalo e o valor da aposta
const apostas = []

frm.addEventListener('submit', (e) => {
    e.preventDefault()

    const cavalo = Number(frm.inCavalo.value) //dados do form
    const valor = Number(frm.inValor.value)

    //adiciona o vetor de objetos (atributos cavalo e valor)
    apostas.push({cavalo, valor})
    //variável para exibir a lista de apostas realizadas
    let lista = `Apostas realizadas: \n${"-".repeat(25)}\n`

    //percorre o vetor e concatena em lista as apostas realizadas
    for(const aposta of apostas) {
        lista += `N° ${aposta.cavalo} ${obterCavalo(aposta.cavalo)}`
        lista += ` - R$: ${aposta.valor.toFixed(2)}\n`
    }
    respLista.innerText = lista //exibe a lista de apostas

    frm.reset() //apaga os dados do formulário e posiciona o cursor no campo cavalo
    frm.inCavalo.focus()
})

const obterCavalo = (num) => {
    const posicao = num -1 //posição no vetor (subtri 1 pois inicia em 0)
    return CAVALOS[posicao] //retorna o nome do cavalo (da cost CAVALOS)
}

frm.inCavalo.addEventListener('blur', () => {
    //se não preencheu o campo, limpa respCavalo e retorna
    //não exibe mensagem de alerta, pois pode sair um clique em Ganhador
    if(frm.inCavalo.value == '') {
        respCavalo.innerText = ''
        return
    }

    const numCavalo = Number(frm.inCavalo.value) //N° do cavalo convertido em número

    if(!validarCavalo(numCavalo)) {
        alert('N° do cavalo inválido!')
        frm.inCavalo.focus()
        return
    }

    const nome = obterCavalo(numCavalo) //atribui retorno das funções à variáveis
    const contaNum = contarApostas(numCavalo)
    const total = totalizarApostas(numCavalo)

    //exibe o nome, n° de apostas e o total apostado no cavalo
    respCavalo.innerText = `${nome} (Apostas: ${contaNum} - R$: ${total.toFixed(2)})`
})

const obtercavalo = (num) => {
    const posicao = num - 1 //posição no vetor (subtrai 1 pois inicia em 0)
    return CAVALOS[posicao] //retorna o nome do cavalo da constante CAVALOS
}

const validarCavalo = (num) => {
    //retorna o valor resultante da coondição (true ou false)
    return num >= 1 && num <= CAVALOS.length
}

const contarApostas = (num) => {
    let contador = 0 //contador de apostas
    for(const aposta of apostas) {
        //verifica se a aposta é no cavalo passado como parâmetro
        if(aposta.cavalo == num) {
            contador++ //conta +1 quando a aposta for no cavalo do parâmetro
        }
    }
    return contador //retorna o total de apostas no cavalo
}

const totalizarApostas = (num) => {
    let total = 0 
    for(const aposta of apostas) {
        //verifica se a aposta é no cavalo passado como parâmetro
        if(aposta.cavalo == num) {
            total += aposta.valor //soma o valor da aposta ao total
        }
    }
    return total //retorna o total apostado no cavalo
}

// quando o campo recebe o foco, limpa o conteudo de dados do cavalo
frm.inCavalo.addEventListener('focus', () => {
    frm.inCavalo.value = ''
    respCavalo.innerText = ''
})

frm.btResumo.addEventListener('click', () => {
    //vetor com valores zerados para cada cavalo
    const somaApostas = [0, 0, 0, 0, 0]

    //percorre apostas e acumula na posição do cavalo apostado (-1, pois inicia em 0)
    for(const aposta of apostas) {
        somaApostas[aposta.cavalo -1] += aposta.valor
    }

    //exibe o resultado
    let resposta = `N° Cavalo ............... R$ Apostado\n${'-'.repeat(35)}\n`
    CAVALOS.forEach((cavalo, i) => {
        resposta += ` ${i + 1} ${cavalo.padEnd(20)}`
        resposta += ` ${somaApostas[i].toFixed(2).padStart(11)}\n`
    })
    respLista.innerText = resposta
})

frm.btGanhador.addEventListener('click', () => {
    //solicita o número do cavalo ganhador
    const ganhador = Number(prompt('N° do cavalo Ganhador: '))

    //validar o preenchimento do prompt anterior
    if(isNaN(ganhador) || !validarCavalo(ganhador)) {
        alert('Cavalo inválido')
        return
    }

    //uso do método reduce para somar o valor das apostas
    const total = apostas.reduce((acumulador, aposta) => acumulador + aposta.valor, 0)

    //concatena em resumo o resultado a ser exibido na página
    let resumo = `Resultado final do páreo\n${'-'.repeat(30)}\n`

    resumo += `N° total de apostas: ${apostas.length}\n`
    resumo += `Total geral R$: ${total.toFixed(2)}\n`
    resumo += `Ganhador n° ${ganhador} - ${obterCavalo(ganhador)}\n\n`
    resumo += `N° de apostas ${contarApostas(ganhador)}\n`
    resumo += `Total apostado R$: ${totalizarApostas(ganhador).toFixed(2)}`

    respLista.innerText = resumo //exibe o resultado

    frm.btApostar.disabled = true //desabilitar botões apostar e ganhador
    frm.btGanhador.disabled = true
    frm.btNovo.focus() //joga o foco no botão novo páreo 
})

//recarrega a página (para funções com apenas uma linha não é necessário {})
frm.btNovo.addEventListener('click', () => window.location.reload())