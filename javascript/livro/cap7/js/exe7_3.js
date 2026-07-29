const frm = document.querySelector('form') //obtém os dados do formulário
const resp = document.querySelector('h3') //obtém os dados do campo de resposta

frm.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const nome = frm.inFuncionario.value.trim() //obtém o nome digitado no front
    if (!nome.includes(' ')) { //verificação de nome
        alert("Informe o nome completo!")
        return
    }
    const priEspaco = nome.indexOf(' ') //localiza o primeiro espaço
    const ultEspaco = nome.lastIndexOf(' ') //localiza o último espaço

    const cracha = nome.substr(0, priEspaco) + nome.substr(ultEspaco) //concatena o primeiro e o último nome

    resp.innerText = `Crachá: ${cracha}` //exibe o resultado
})