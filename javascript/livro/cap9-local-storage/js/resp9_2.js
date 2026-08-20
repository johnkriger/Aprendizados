const frm = document.querySelector('form') //obtém os elementos da página
const resp = document.querySelector('pre')

frm.addEventListener('submit', (e) => {
    e.preventDefault()

    const produto = frm.inProduto.value //recebe o produto informado
    
    //verifica se já existe uma lista para ser incrementada
    if(localStorage.getItem('listaCompras')) {
        //incrementa uma lista já existente
        const addItem = localStorage.getItem('listaCompras') + ';' + produto
        localStorage.setItem('listaCompras', addItem)
    } else {
        //cria a lista
        localStorage.setItem('listaCompras', produto)
    }

    mostrarLista() //mostra a lista atualizada
    frm.reset() //limpa o formulário
    frm.inProduto.focus() //mantém o cursor no campo de digitação
})

//função que mostra os itens cadastrados na tela
const mostrarLista = () => {
    const listaAtualizada = localStorage.getItem('listaCompras')
    let itens = ''
    
    //se ainda não existem itens registrados
    if(!listaAtualizada) {
        resp.innerText = ''
        return
    }
    
    //divide a string de lista em um vetor de itens
    const vetorListaAtualizada = listaAtualizada.split(';')
    
    const vetorOrdenado = vetorListaAtualizada.sort()

    for(let i = 0; i < vetorOrdenado.length; i++) {
        itens += vetorOrdenado[i] + '\n' //coloca um item em cada linha
    }
    resp.innerText = 'Produtos Adicionados\n--------------------\n' + itens
}
//mostrar lista ao carregar a página
window.addEventListener('load', mostrarLista)

//apagar todos os itens da lista
frm.btLimpar.addEventListener('click', () => {
    if(confirm('Deseja excluir a lista?')) {
        localStorage.removeItem('listaCompras')
        mostrarLista()
    }
})

//apagar um item da lista apenas
frm.btRemover.addEventListener('click', () => {
    const listaAtualizada = localStorage.getItem('listaCompras')

    //se a lista estiver vazia
    if(!listaAtualizada) {
        alert('Lista vazia!')
        return
    }

    //informar o item a ser removido
    const itemRemover = prompt('Qual item deve ser excluído da lista?')

    if(!itemRemover) {
        alert('Deve ser informado o nome do item a ser removido!')
        return
    }

    const vetorListaAtualizada = listaAtualizada.split(';') //divide a string de lista em um vetor de itens
    const indice = vetorListaAtualizada.indexOf(itemRemover) //identifica qual o índice do item a ser removido

    //verifica se o item foi encontrado
    if(indice !== -1) {
        vetorListaAtualizada.splice(indice, 1)
        localStorage.setItem('listaCompras', vetorListaAtualizada.join(';'))
    } else {
        alert('Item não encontrado, varifique se foi digitado corretamente.')
    }

    mostrarLista()
}) 