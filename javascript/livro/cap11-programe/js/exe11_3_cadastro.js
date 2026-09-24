const frm = document.querySelector('form') //cria referência ao form

frm.addEventListener('submit', (e) => {
    e.preventDefault()

    //obtém o conteúdo dos campos (.trim() remove espaços na palavra no início e fim)
    const palavra = frm.inPalavra.value.trim()
    const dica = frm.inDica.value

    //valida se a palavra foi preenchida sem espaços entre os caracteres
    if(palavra.includes(' ')) {
        alert('Informe uma palavra sem espaços')
        frm.inPalavra.focus()
        return
    }

    //verifica se já existem palavras cadastradas
    if(localStorage.getItem('jogoPalavra')) {
        localStorage.setItem('jogoPalavra',
            localStorage.getItem('jogoPalavra') + ';' + palavra
        )
        localStorage.setItem('jogoDica', localStorage.getItem('jogoDica') + ';' + dica)
    } else {
        //se for a primeira inclusão apenas grava a palavra e a dica
        localStorage.setItem('jogoPalavra', palavra)
        localStorage.setItem('jogoDica', dica)
    }

    //verifica se salvou
    if((localStorage.getItem('jogoPalavra'))) {
        alert(`Palavra "${palavra}" salva com sucesso!`)
    }

    frm.reset() //limpa o form
    frm.inPalavra.focus() //coloca o cursor em inPalavra
})