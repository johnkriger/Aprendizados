const frm = document.querySelector('form') //obtém o elemento da página
const respLista = document.querySelector('pre')

frm.addEventListener('submit', (e) => {
    e.preventDefault() //evita o envio do formulário

    const nome = frm.inNome.value //conteúdo do campo nome
    const peso = Number(frm.inPeso.value) //conteudo do campo peso

    //chama a function que verfica se o peso já foi apostado

    if(verApostaExiste(peso)) {
        alert('Alguém ja apostou este peso, informe outro.')
        frm.inPeso.focus()
        return
    }
    
    if(localStorage.getItem('melanciaNome')) { //se houver dados no localStorage
        //obtém o conteúdo já salvo e acrescenta ";" + dados da aposta
        const melanciaNome = localStorage.getItem('melanciaNome') + ';' + nome
        const melanciaPeso = localStorage.getItem('melanciaPeso') + ';' + peso
        localStorage.setItem('melanciaNome', melanciaNome) //salva os dados
        localStorage.setItem('melanciaPeso', melanciaPeso)
    } else { //senão é a primeira resposta
        localStorage.setItem('melanciaNome', nome)
        localStorage.setItem('melanciaPeso', peso)
    }

    mostrarApostas() //chama function que mostra as apostas já salvas
    frm.reset() //limpa o form
    frm.inNome.focus() //joga o cursor no campo nome
})

const verApostaExiste = (peso) => {
    if(localStorage.getItem('melanciaPeso')) {//se existir dados em localStorage
        //opbtém seu conteúdo e a string é dividida em itens de vetor a cada ";"
        const pesos = localStorage.getItem('melanciaPeso').split(';')

        //o peso deve ser convertido em string, pois o vetor contém strings
        return pesos.includes(peso.toString())
    } else {
        return false
    }
}

const mostrarApostas = () => {
    //se não há apostas armazenadas em localStorage
    if(!localStorage.getItem('melanciaNome')) {
        //limpa o espaço de exibição das apostas (para quando "limpar apostas")
        respLista.innerText = ''
        return //retorna e não executa os comando abaixo
    }

    //obtém o conteúdo das variáveis salvas no localStorage, separando-as em elementos de vetor a cada ocorrência de ";"
    const nomes = localStorage.getItem('melanciaNome').split(';')
    const pesos = localStorage.getItem('melanciaPeso').split(';')

    let linhas = '' //irá aculular linhas a serem exibidas

    //repetição para percorrer todos os elementos do vetor
    for( let i = 0; i <nomes.length; i++) {
        //concatena em linhas os nomes dos apostadores e suas apostas
        linhas += nomes[i] + ' - ' + pesos[i] + 'gr\n'
    }

    //exibe as linhas (altera os conteúdo do elemento respLista)
    respLista.innerText = linhas
}

//chama a function quando a página é carregada. para mostrar apostas salvas
window.addEventListener('load', mostrarApostas)

frm.btVencedor.addEventListener('click', () => {
    //se não há apostas armazenadas em localStorage
    if(!localStorage.getItem('melanciaNome')) {
        alert("Não há apostas cadastradas")
        return //retoorna e não executa os comandos abaixo
    }

    //solicita o peso correto da melância
    const pesoCorreto = Number(prompt('Qual o peso correto da melância?'))
     
    //se não informou retorna
    if(pesoCorreto == 0 || isNaN(pesoCorreto)) {
        return
    }

    //obtém os dados armazenados, separando-os em vetor
    const nomes = localStorage.getItem('melanciaNome').split(';')
    const pesos = localStorage.getItem('melanciaPeso').split(';')

    //valor inicial para vencedor é o da primeira aposta
    let vencedorNome = nomes[0]
    let vencedorPeso = Number(pesos[0])

    //percorre as apostas
    for(let i = 0; i < nomes.length; i++) {
        //calcula a diferença de peso do "vencedor e da aposta atual"
        const difVencedor = Math.abs(vencedorPeso - pesoCorreto)
        const difAposta = Math.abs(Number(pesos[i]) - pesoCorreto)

        //se a diferença da aposta atual (no for) for menos que a do "vencedor"
        if(difAposta < difVencedor) {
            vencedorNome = nomes[i] //troca o vencedor para o elemento atual
            vencedorPeso = pesos[i] 
        }
    }

    //monta mensagem com dados do vencedor
    let mensagem = "Resultado - Peso Correto: " + pesoCorreto + "gr"
    mensagem += '\n------------------------------'
    mensagem += '\nVencedor: ' + vencedorNome
    mensagem += '\nAposta: ' + vencedorPeso + 'gr'
    alert(mensagem)
 })

 frm.btLimpar.addEventListener('click', () => {
    //solicita a confirmação para excluir apostas
    if(confirm('Confirma exclusão das apostas?')) {
        localStorage.removeItem('melanciaNome') //remove as variáveis salvas em localStorage
        localStorage.removeItem('melanciaPeso')
        mostrarApostas() //exibe a listagem vazia
    }
 })