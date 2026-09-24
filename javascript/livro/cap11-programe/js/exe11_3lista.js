const tbPalavras = document.querySelector('table') //cria referência aos elementos da página
const ckMostrar = document.querySelector("input[type='checkbox']")

const montarTabela = () => {
    //se houver dados salvos em localStorage
    if(localStorage.getItem('jogoPalavra')) {
        //obtém o conteúdo e converte em elementos de vetor
        const palavras = localStorage.getItem('jogoPalavra').split(';')
        const dicas = localStorage.getItem('jogoDica').split(';')

        //percorre os elementos do vetor e insere na tabela
        for(let i = 0; i < palavras.length; i++) {
            const linha = tbPalavras.insertRow(-1) //adiciona linha na tabela

            const col1 = linha.insertCell(0) //cria colunas na linha inserida
            const col2 = linha.insertCell(1)
            const col3 = linha.insertCell(2)

            col1.innerText = palavras[i] //insere conteúdo nas colunas criadas
            col2.innerText = dicas[i]
            col3.innerHTML = "<i class='exclui' title='Excluir'>&#10008;</i>"
        }
    }
}

//mostrar lista de palavras se o checkbox estiver marcado
ckMostrar.addEventListener('change', () => {
    ckMostrar.checked ? montarTabela() : window.location.reload()
})

tbPalavras.addEventListener('click', (e) => {
    //se a classe do elemento alvo clicado contém exclui
    if(e.target.classList.contains('exclui')) {
        //acessa o 'pai do pai' do elemento alvo e obtém o texto do 1º filho
        const palavra = e.target.parentElement.parentElement.children[0].innerText

        if(confirm(`Confirma Exclusão da Palavra: "${palavra}"?`)) {
            //remove linha da tabela correspondente so simbolo de excluir clicado
            e.target.parentElement.parentElement.remove()

            localStorage.removeItem('jogoPalavra') //exclui dados de localStorage
            localStorage.removeItem('jogoDica')

            const palavras = []
            const dicas = []

            //obtém os dados da tabela acrescentando-os aos vetores
            for(let i = 1; i < tbPalavras.rows.length; i++) {
                palavras.push(tbPalavras.rows[i].cells[0].innerText)
                dicas.push(tbPalavras.rows[i].cells[1].innerText)
            }

            //salva o conteúdo dos vetores em localStorage sem o item removido
            localStorage.setItem('jogoPalavra', palavras.join(';'))
            localStorage.setItem('jogoDica', dicas.join(';'))
        }
    }
})