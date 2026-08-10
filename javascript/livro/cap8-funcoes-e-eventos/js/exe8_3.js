const frm = document.querySelector('form') //obtém os elementos da página
const resp = document.querySelector('pre')

const itens = [] //inicialização de vetor

frm.rbPizza.addEventListener('click', () => { //verifica quando o radio button é clicado
    frm.inBebida.className = 'oculta' //oculta o select das bebidas
    frm.inPizza.className = 'exibe' //exibe o select das pizzas    
})

frm.rbBebida.addEventListener('click', () => { //verifica quando o radio button é clicado
    frm.inPizza.className = 'oculta' //oculta o select das pizzas
    frm.inBebida.className = 'exibe' //exibe o select das bebidas    
})

frm.inDetalhes.addEventListener('focus', () => { //quando o campo recebe o foco
    if(frm.rbPizza.checked) { //se o radio button rbPizza estiver marcado
        const pizza = frm.inPizza.value //obtém o valor do item selecionado
        //uso do if ternário para indicar o número de sabores
        const num = pizza == 'media' ? 2 : pizza == 'grande' ? 3 : 4
        //atributo placeholder exibe uma dica de preenchimento do campo
        frm.inDetalhes.placeholder = `Até ${num} sabores`    
    }
})

frm.inDetalhes.addEventListener('blur', () => { //quando campo perde o foco
    frm.inDetalhes.placeholder = '' //limpa dica de preenchimento    
})

frm.addEventListener('submit', (e) => {
    e.preventDefault()

    let produto

    if(frm.rbPizza.checked) {
        const num = frm.inPizza.selectedIndex //obtém o número do item selecionado
        produto = frm.inPizza.options[num].text //texto do item selecionado
    } else {
        const num = frm.inBebida.selectedIndex
        produto = frm.inBebida.options[num].text
    }
    const detalhes = frm.inDetalhes.value //conteúdo de inDetalhes
    itens.push(produto + '(' + detalhes + ')') //adiciona ao vetor
    resp.innerText = itens.join('\n') //exibe itens do pedido

    frm.reset() //limpa o form
    frm.rbPizza.dispatchEvent(new Event('click')) //dispara click em rbPizza
})