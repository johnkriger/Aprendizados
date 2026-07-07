const frm = document.querySelector('form') //obtém os elementos da página
const resp = document.querySelector('pre')
const carros = [] //declara valor global

frm.addEventListener('submit', (e)=> { //escuta evento submit do form
    e.preventDefault()                 //evita o envio do form
    const modelo = frm.inModelo.value  //obtém dados do form
    const preco = Number(frm.inPreco.value)
    carros.push({modelo, preco})       //adiciona dados ao vetor de objetos
    frm.inModelo.value = ''             //limpa os campos do form
    frm.inPreco.value = ''

    frm.inModelo.focus()                //posiciona o cursor em inModelo

    //dispara um evento de click em btListar (equivale a um clique no botão da página)
    frm.btListar.dispatchEvent(new Event('click'))
})

frm.btListar.addEventListener('click', () => { //escuta clique em btListar
    if(carros.length == 0 ){                    //se o array estiver vazio
        alert('Não há carros na lista!!')
        return
    }
    //metodo reduce() concatena uma string, obtendo modelo e preço de cada veículo 
    const lista = carros.reduce((acumulador, carro) => 
        acumulador + carro.modelo + " - R$: " + carro.preco.toFixed(2) + "\n", "")
    resp.innerText = `Lista dos carros cadastrados \n ${"-".repeat(40)} \n ${lista}`
})

frm.btFiltrar.addEventListener('click', () => {
    const maximo = Number(prompt("Qual valor é o máximo que o pobre pode pagar?"))
    if (maximo == 0 || isNaN(maximo)) { //se não informou ou valor inválido
        return                          //retorna    
    }
    //cria um vetor com os objetos que atendem a condição do filtro
    const carrosFilter = carros.filter(carro => carro.preco <= maximo)
    if (carrosFilter.length == 0) { //se o vetor estiver vazio
        alert("Sinto muito, vc é pobre demais pra comprar aqui!!")    
        return
    }
    let lista = ''
    for (const carro of carrosFilter) { //percorre cada elemento do array
        lista += `${carro.modelo} - R$: ${carro.preco.toFixed(2)}\n`    
    }
    resp.innerText = `Carros até R$: ${maximo.toFixed(2)}\n ${'-'.repeat(40)} \n ${lista}`
})

frm.btSimular.addEventListener('click', () => { 
    const desconto = Number(prompt("Qual porcentagem de desconto?"))
    if (desconto == 0 || isNaN(desconto)) { //se não ouver valor de desconto
        return                                  //retorna    
    }
    const carrosDesc = carros.map(aux => ({
        modelo: aux.modelo,
        preco: aux.preco - (aux.preco * desconto / 100)
    }))
    let lista = ''
    for (const carro of carrosDesc) { //percorre cada elemento do array
        lista += `${carro.modelo} - R$: ${carro.preco.toFixed(2)} \n`
    }
    resp.innerText = `Carros com desconto: ${desconto}%\n ${'-'.repeat(40)} \n ${lista}`
})