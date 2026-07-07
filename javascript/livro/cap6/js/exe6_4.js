const frm = document.querySelector('form') //obtém os elementos a serem manipulados
const resp = document.querySelector('pre')

const criancas = [] //declara vetor global

frm.addEventListener('submit', (e) => {
    e.preventDefault()
    const nome = frm.inNome.value //obtém os dados dos campos
    const idade = Number(frm.inIdade.value)
    criancas.push({nome, idade}) //adiciona dados ao vetor de objetos
    frm.reset() //limpa campos do form
    frm.inNome.focus() //posiciona no campo do formulário
    frm.btListar.dispatchEvent(new Event('click')) //dispara o click em btListar
})

frm.btListar.addEventListener('click', () => {
    if (criancas.length == 0){ //se vazio exibe alerta
        alert("Não há crianças na lista")
        return
    }
    let lista = '' //para concatenar lista de criaças
    for (const crianca of criancas) {
        const {nome, idade} = crianca //desestrutura o objeto
        lista += nome + ' - ' + idade + ' anos\n'
    }
    resp.innerText = lista //exibe a lista
})

frm.btResumir.addEventListener('click', () => {
    if (criancas.length == 0) {
        alert('Não há crianças na lista')
        return
    }
    const copia = [...criancas] // cria cópia do vetor de crianças
    copia.sort((a, b) => a.idade - b.idade) //ordena por idade
    let resumo = '' //para concatenar saida
    let aux = copia[0].idade //menor idade do vetor ordenado
    let nomes = [] //para inserir nomes de cada idade
    for (const crianca of copia) {
        const {nome, idade} = crianca 
        if (idade == aux) { //se é da mesma idade auxiliar
            nomes.push(nome) //adiciona ao vetor nomes
        } else { //senão, monta o resumo de cada idade
            resumo += aux + ' anos(s): ' + nomes.length + ' criança(s)\n'
            resumo += ((nomes.length / copia.length) * 100).toFixed(2) + '%\n'
            resumo += '(' + nomes.join(', ') + ')\n\n'
            aux = idade // obtém a nova idade da ordem
            nomes = [] // limpa o vetor de nomes
            nomes.push(nome) //adidiona o primeiro da nova idade
        }
    }
    // adiciona a última criança
    resumo += aux + 'ano(s): ' + nomes.length + ' criança(s) - '
    resumo += ((nomes.length / copia.length) * 100).toFixed(2) + '%\n'
    resumo += '(' + nomes.join(', ') + ')\n\n'
    resp.innerText = resumo //exibe a resposta
})