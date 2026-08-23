const frm = document.querySelector('form') //obtém elementos de página
const dvQuadro = document.querySelector('#divQuadro')

frm.addEventListener('submit', (e) => {
    e.preventDefault()

    const tarefa = frm.inTarefa.value //obtém dados informados pelo usuário

    const h5 = document.createElement('h5') //cria o elemento HTML h5
    const texto = document.createTextNode(tarefa) //cria um texto
    h5.appendChild(texto) //define que texto será filho de h5
    dvQuadro.appendChild(h5) //e que h5 será filho de divQuadro

    frm.inTarefa.value = '' //limpa o campo de edição
    frm.inTarefa.focus() //joga o cursor nesse campo
})

frm.btSelecionar.addEventListener('click', () => {
    const tarefas = document.querySelectorAll('h5') //obtém tags h5 da página

    if(tarefas.length == 0) {
        alert('Não há tarefas para selecionar') //se não há tarefas eibe alerta e retorna
        return
    }

    let aux = -1 //variável auxiliar para indicar a linha selecionada

    //percorre a lista de elementos h5 inseridos na página
    for(let i = 0; i < tarefas.length; i++) {
        //se a tag é da class tarefa-selecionada (está selecionada)
        if(tarefas[i].className == 'tarefa-selecionada') {
            tarefas[i].className = 'tarefa-normal' //troca para normal
            aux = i //muda oa valor da variável auxiliar
            break //sai da repetição
        }
    }
    //se a linha que está selecionada é a última, irá voltar para a primeira
    if (aux == tarefas.length -1) {
        aux = -1
    }

    tarefas[aux + 1].className = 'tarefa-selecionada' //muda o estilo da próxima linha
})

frm.btRetirar.addEventListener('click', () => {
    const tarefas = document.querySelectorAll('h5') //obtém tags h5 da página

    let aux = -1 //variável auxiliar para indicar a linha selecionada

    //percorre a lista das tarefas inseridas na página (elementos h5)
    tarefas.forEach((tarefa, i) => {
        if(tarefa.className == 'tarefa-selecionada') { //se é da classe tarefa selecionada
            aux = i //muda o valor da variável aux
        }
    })

    if(aux == -1) { //se não há tarefa selecionada (ou se a lista está vazia...)
        alert('Selecione uma tarefa para removê-la.')
        return
    }
    //solicita confirmação (exibindo conteúdo da taga h5 selecionada)
    if(confirm(`Confirma exclusão de "${tarefas[aux].innerText}"?`)) {
        dvQuadro.removeChild(tarefas[aux]) //remove um dos filhos de divQuadro
    }
})

frm.btGravar.addEventListener('click', () => {
    const tarefas = document.querySelectorAll('h5') //obtém tags h5 da página

    if(tarefas.length == 0) {
        alert('Não há tarefas para serem salvas') //exibe alerta se não houver tarefas
        return
    }

    let dados = '' //irá acumular os dados a serem salvos

    tarefas.forEach(tarefa => {
        dados += tarefa.innerText + ';' //acumula o conteúdo de cada h5
    })

    //grava os dados em localStorage
    localStorage.setItem('tarefas', dados.slice(0, -1))

    //confere se os dados foram armazenados em localStorage
    if(localStorage.getItem('tarefas')) {
        alert('Tarefas salvas com sucesso!')
    }
})

window.addEventListener('load', () => {
    //verifica se há tarefas salvas no navegador do usuário
    if(localStorage.getItem('tarefas')) {
        //cria um vetor com a lista de tarefas (separadas pelo split(';))
        const dados = localStorage.getItem('tarefas').split(';')

        //percorre os dados armazenados em localStorage
        dados.forEach(dado => {
            const h5 = document.createElement('h5') //cria elemento HTML h5
            const texto = document.createTextNode(dado) //cria um texto
            h5.appendChild(texto) //define que o texto será filho de h5
            dvQuadro.dvQuadro.appendChild(h5) //e que h5 será filho de divQuadro
        })
    }
})