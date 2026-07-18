/*
1) Receber os dados do front
2) Validar se o nome foi preenchido
3) Adicionar os clubes a um array
4) Listar os clubes se o array não estiver vazio
5) Montar a tabela de jogos, com enfrentamento do 1º enfrentando o último, 2º enfrentando o penúltimo e assim sucessivamente
(Se o número de times for impar deve ser exibido mensagem solicitando inserção de novo time)
*/
const frm = document.querySelector('form') //obtenção de dados do front
const resp = document.querySelector('pre')

const times = [] //inicialização de vetor

frm.addEventListener('submit', (e) => {
    e.preventDefault() //evita o envio do form
    const time = frm.inTime.value //obtém o nome do time
    if (!time) { //caso o nome seja enviado vazio
        alert("O campo não pode ser enviado vazio!!")
    }
    times.push(time) //inserção do item no vetor
    frm.reset() //limpeza do campo do formulário
    inTime.focus() //posiciona o cursor no campo do formulário
    frm.btListar.dispatchEvent(new Event('click')) //dispara o click no botão de listagem
})

frm.btListar.addEventListener('click', () => { //botão de listagem
    if (times.length == 0) { //verifica se o vetor está vazio
        alert("Não há clubes na listagem!!")
        return
    }
    let lista = '' //inicialização da variável de listagem
    for (const time of times) { //percorre o vetor de times
        lista += time + '\n' //copncatena o nome do time na variável de listagem
    }
    resp.innerText = lista //exibe a listagem no front
})

frm.btTabela.addEventListener('click', () => { //Botão de tabela de jogos
    if (times.length == 0 || times.length % 2 != 0) { //verifica se o vetor está povoado e se a quantidade de times é par
        alert("A quantidade de times é inválida, volte para a inserção de times!!")
        return
    }
    let tabela = '' //inicialização da variável tabela
    const copiaTimes = times
    for (let i = 0; i < copiaTimes.length / 2; i++) { //percorre o vetor de times até a metade
        const timeA = copiaTimes[i] //obtém o time da primeira metade
        const timeB = times[copiaTimes.length -i -1] //obtém o time da segunda metade em ordem decrescente
        tabela += timeA + ' X ' + timeB + '\n' //concatena os times na variável tabela
    }
    resp.innerText = tabela //exibe a tabela no front
})