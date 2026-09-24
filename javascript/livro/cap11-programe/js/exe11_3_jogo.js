//referência aos elementos da página
const frm = document.querySelector('form')
const respPalavra = document.querySelector('#outPalavra')
const respErros = document.querySelector('#outErros')
const respDica = document.querySelector('#outDica')
const respChances = document.querySelector('#outChances')
const respMensagemFinal = document.querySelector('#outMensagemFinal')
const imgStatus = document.querySelector('img')

//declaração de variáveis globais
let palavraSorteada
let dicaSorteada

window.addEventListener('load', () => {
    //se não houver palavras cadastradas
    if(!localStorage.getItem('jogoPalavra')) {
        alert('Cadastre palavras para poder jogar')
        frm.inLetra.disabled = true //desabilita inLetra e botões
        frm.btJogar.disabled = true
        frm.btVerDica.disabled = true
    }
    //obtém conteúdo do localStorage e separa elementos en vetor
    const palavras = localStorage.getItem('jogoPalavra').split(';')
    const dicas = localStorage.getItem('jogoDica').split(';')

    const tam = palavras.length //número de palavras cadastradas

    //gera um número entre 0 e tam -1 (pois arredonda para baixo)
    const numAleatorio = Math.floor(Math.random() * tam)

    //obtém palavra em letras maiúsculas e dica da posição do nº aleatório gerado
    palavraSorteada = palavras[numAleatorio].toUpperCase()
    dicaSorteada = dicas[numAleatorio]
    let novaPalavra = '' //para montar palavra exibida com letra inicial e "_"

    //for para exibir a letra inicial e as demais ocorrências desta letra na palavra
    for(const letra of palavraSorteada) {
        //se igual a letra inicial acrescenta essa letra na exibição
        if(letra == palavraSorteada.charAt(0)) {
            novaPalavra += palavraSorteada.charAt(0)
        } else {
            novaPalavra += '_' //senão acrescenta "_"
        }
    }
    respPalavra.innerText = novaPalavra //exibe a nova palavra
})

frm.btVerDica.addEventListener('click', () => {
    //verifica se o jogador já clicou antes no botão
    if(respErros.innerText.includes('*')) {
        alert('Você já solicitou a dica')
        frm.inLetra.focus()
        return
    }

    respDica.innerText = " * " + 'dica sorteada' //exibe a dica
    respErros.innerText += '*' //acrescenta "*" nos erros

    const chances = Number(respChances.innerText) - 1 //diminui 1 em chances
    respChances.innerText = chances //mostra o numero de chances

    trocarStatus(chances) //função para trocar a imagem

    verificarFim() //função que verifica se ainda restam chances

    frm.inLetra.focus()
})

const trocarStatus = (num) => {
    if(num > 0) imgStatus.src = `../img/status${num}.jpg`
}

frm.addEventListener('submit', (e) => {
    e.preventDefault()

    const letra = frm.inLetra.value.toUpperCase() //obtém a letra digitada pelo usuário

    let erros = respErros.innerText
    let palavra = respPalavra.innerText

    //verifica se a letra apostada já consta em erros ou na palavra
    if(erros.includes(letra) || palavra.includes(letra)) {
        alert("Essa letra já foi usada")
        frm.inLetra.focus()
        return
    }

    //se a letra consta em palavra sorteada
    if(palavraSorteada.includes(letra)) {
        let novaPalavra = ''
        //for para montar a palavra a ser exibida
        for(let i=0; i<palavraSorteada.length; i++) {
            //se igual a letra apostada,acrescenta na exibição
            if(palavraSorteada.charAt(i) == letra) {
                novaPalavra += letra
            } else {
                novaPalavra += palavra.charAt(i) //senão acrescenta a letra ou o _ já existente
            }
        }
        respPalavra.innerText = novaPalavra //exibe a nova palavra
    } else {
        respErros.innerText += letra //acrescenta a letra aos erros
        const chances = Number(respChances.innerText) -1 //diminui o número de chances
        respChances.innerText = chances //exibe o novo número de chances

        trocarStatus(chances) //troca imagem
    }

    verificarFim() //verifica se já ganhou ou perdeu

    frm.inLetra.value = ''
    frm.inLetra.focus()
})

const verificarFim = () => {
    const chances = Number(respChances.innerText) //obtém o número de chances

    if(chances == 0) {
        respMensagemFinal.className = 'display-3 text-danger'
        respMensagemFinal.innerText = `Perdeu!! A palavra era ${palavraSorteada}!`
        concluirJogo()
    } else if(respPalavra.innerText == palavraSorteada) {
        respMensagemFinal.className = 'display-3 text-primary'
        respMensagemFinal.innerText = 'Parabéns você ganhou!!! Como diria minha mãe, não fez mais que a obrigação!'
        trocarStatus(4) //exibe rosto feliz
        concluirJogo()
    }
}

//modifica o texto da dica e desabilita os botões de jogar
const concluirJogo = () => {
    respDica.innerText = '*Clique no botão "Iniciar Jogo" para jogar novamente!'
    frm.inLetra.disabled = true
    frm.btJogar.disabled = true
    frm.btVerDica.disabled = true
}