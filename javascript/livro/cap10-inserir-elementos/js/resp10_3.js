//obtém elementos da página
const frm = document.querySelector('form')
const dvTimes = document.querySelector('#divTimes')
const tbConfrontos = document.querySelector('#tbConfrontos')
const btAdicionar = document.querySelector('input[type=submit]')

//função que desabilita os botões de adicionar times e montar confrontos
const verificarConfrontosMontados = () => {
    if(tbConfrontos.rows.length > 1) {
        btAdicionar.disabled = true
        frm.btMontar.disabled = true
    }
}

frm.addEventListener('submit', (e) => {
    e.preventDefault()

    const time = frm.inClubes.value.trim()
    frm.inClubes.value = '' //limpa o campo de entrada
    frm.inClubes.focus() //posiciona o cursor 

    if(!localStorage.getItem('times')) { //se não existir o item 'times' no localStorage cria o item com o valor informado pelo usuário
        localStorage.setItem('times', time) 
    } else { //se já existir a chave 'times' no localStorage, adiciona o novo time informado separando os valores com ';'
        const times = localStorage.getItem('times') + ';' + time
        localStorage.setItem('times', times)
    }

    mostrarTimes() //chama a função que mostra os times na tela

})

//função que mostra os times na tela
const mostrarTimes = () => {
    const times = localStorage.getItem('times').split(';') //obtém os times do localStorage e separa em um array
    dvTimes.innerHTML = '' //limpa a div
    
    for(const time of times) {
        const h5 = document.createElement('h5') //cria o elemento h5
        h5.className = 'italico-direita' //define a classe do elemento h5
        const texto = document.createTextNode(time) //cria o nó de texto
        h5.appendChild(texto) //adiciona o nó de texto ao elemento h5
        dvTimes.appendChild(h5) //adiciona o elemento h5 à div
    }
}

frm.btMontar.addEventListener('click', () => {
    const times = document.querySelectorAll('h5') //obtém os elementos h5 da página
    if(times.length == 0 || times.length % 2 != 0) { //se não houver times ou se houver em quantidade impar
        alert('Informe um número par de times para que os confrontos possam ser realizados')
        frm.inClubes.focus() //posiciona o cursor 
        return
    }

    for(let i = 0; i < times.length; i += 2) {
        const linha = tbConfrontos.insertRow(-1) //adiciona uma linha na tabela
        const col1 = linha.insertCell(0) //cria a primeira coluna
        const col2 = linha.insertCell(1) //segunda coluna
        const col3 = linha.insertCell(2) //terceira coluna  
        
        col1.innerText = times[i].innerText
        col2.innerHTML = '&#10008'
        col3.innerText = times[i + 1].innerText
    }

    //desativar botões
    verificarConfrontosMontados()
})

frm.btNovo.addEventListener('click', () => {
    localStorage.removeItem('times') //remove os times do localStorage
    //limpa elementos adicionados
    dvTimes.innerHTML = ''
    tbConfrontos.innerHTML = ''

    //habilita os botões
    frm.btMontar.disables = false
    btAdicionar.disabled = false
    
    frm.inClubes.focus() //posiciona o cursor
})

window.addEventListener('load', mostrarTimes()) //chama a função de mostrar times ao carregar a página