const frm = document.querySelector('form') //obtém os elementos da página
const imClube = document.querySelector('#imgClube')
const dvTitulo = document.querySelector('#divTitulo')

const trocarClube = () => {
    let clube //variável que irá receber o nome do clube

    if(frm.rbPortugal.checked) { //verifica qual opção foi selecionada
        clube = 'Portugal'    
    } else if(frm.rbGremio.checked) {
        clube = 'Gremio'
    } else {
        clube = 'Real'
    }
console.log(clube)
    // define as classes de dvTitulo: row e cores do clube
    dvTitulo.className =  `row cores-${clube}`

    //modifica a imagem de acordo com a seleção do cliente

    imClube.src = `img/${clube.toLowerCase()}.jpg`
    imClube.className = 'img-fluid' //muda o estilo para exibir a imagem
    imClube.alt = `Simbolo do ${clube}` //modifica atributo alt

    localStorage.setItem('clube', clube) //salva no navegador a escolha do cliente
}

//associa ao evento change de cada botão do form a função trocarClube
frm.rbPortugal.addEventListener('change', trocarClube)
frm.rbGremio. addEventListener('change', trocarClube)
frm.rbReal. addEventListener('change', trocarClube)

const verificarClube = () => {
    if(localStorage.getItem('clube')) { //se já estiver salvo algum clube
        const clube = localStorage.getItem('clube')  //obtém o nome do clube

        if(clube == 'Protugal') { //marca o checked no clube salvo na memória
            frm.rbPortugal.checked = true
        } else if(clube == 'Gremio') {
            frm.rbGremio.checked = true 
        } else {
            frm.rbReal.checked = true
        }
        trocarClube() //chama function que troca imagem e cores
    }
}
//ao carregar a página, verifica se o cliente já selecionou clube anteriormente
window.addEventListener('load', verificarClube)