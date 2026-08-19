const inRadios = document.querySelectorAll("input") // captura tags input da página
const imClube = document.querySelector("#imgClube")
const dvTitulo = document.querySelector("#divTitulo")

const trocarClube = () => {
    const clubes = ['Portugal', 'Gremio', 'Real'] //vetor com a lista de clubes

    let selecao
    //percorre os inRadios para verificar qual está selecionado
    for(let i = 0; i < inRadios.length; i++) {
        if(inRadios[i].checked) {
            selecao = i //se selecionado, armazena índice do radio selecionado
            break
        }
    }
    if(selecao <= 2) { //se selecao <= 2, então torce por algum clube
        dvTitulo.className = `row cores-${clubes[selecao]}` //modifica a cor
        //muda a propriedade src com a imagem do clube selecionado
        imClube.src = `img/${clubes[selecao].toLowerCase()}.jpg`
        imClube.className = 'img-fluid' //muda estilo para exibir imagem
        imClube.alt = `Simbolo do ${clubes[selecao]}` //texto alternativo
        localStorage.setItem("clube", clubes[selecao]) //salva o nome do clube
    } else { //selecionou nenhum
        dvTitulo.className = 'row' //tira a classe de cor de divTitulo
        imClube.className = 'd-none' //oculta imagem
        imClube.alt = '' //limpa oa texto alternativo
        localStorage.removeItem('clube') //remove variável do localStorage
    }
}

const verificarClube = () => {
    if(localStorage.getItem('clube')) { //se já estiver salvo algum clube
        const clube = localStorage.getItem('clube') //obtém o nome do clube
        //conforme o clube, marca um dos elementos do input type radio
        if(clube == 'Portugal') { //marca o checked no clube salvo na memória
            inRadios[0].checked = true
        } else if(clube == 'Gremio') {
            inRadios[1].checked = true 
        } else {
            inRadios[2].checked = true
        }
        trocarClube() //chama function que troca imagem e cores
    }
}

//percorre os elementos para associar function ao evento change
for(const inRadio of inRadios) {
    inRadio.addEventListener('change', trocarClube)
}

//function que conta as visitas do cliente
const numVisitas = () => {
    let visitas = Number(localStorage.getItem('visitas')) || 0
    visitas ++

    //inicia as visitas no localStorage
    localStorage.setItem('visitas', Number(visitas))

    // verifica se é a primeira visita do cliente
    if(visitas == 1) {
        return 'Olá, essa é sua primeira visita à loja.'
    } else {
        visitas++
        return `Olá, essa é a sua visita de número ${visitas}. Que bom que voltou! Aproveite!!`
    }
}

// ao carregar a página, verifica se cliente já selecionou clube anteriormente
window.addEventListener('load', verificarClube)

//chama a função que conta o número de visitas desse cliente na loja
alert(numVisitas())