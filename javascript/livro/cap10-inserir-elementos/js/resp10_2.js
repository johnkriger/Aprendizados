//obtém elementos da página
const frm = document.querySelector("form")
const dvNome = document.querySelector('#divNome')

frm.addEventListener('submit', (e) => {
    e.preventDefault()

    const nome = frm.inNome.value.trim() //obtém o nome informado pelo usuário
    const partes = nome.split(' ') //separa o nome em partes

    if(partes.length <= 1) {
        alert('Informe o nome completo')
        frm.inNome.focus()
        return
    }

    const nomeAntigo = document.querySelectorAll('h3') //obtém a lista de h3 já existentes
    for(let i = nomeAntigo.length - 1; i >= 0; i --) {
        nomeAntigo[i].remove() //remove os nomes antigos
    }

    const cores = ['blue', 'red', 'brown', 'pink', 'yellow', 'green', 'purple', 'orange', 'gray', 'aquamarine']
    for(const parte of partes) {
        const h3 = document.createElement('h3') //cria o elemento h3
        const texto = document.createTextNode(parte) //cria o nó de texto
        h3.appendChild(texto) //adiciona o nó de texto ao elemento h3
        const cor = Math.floor(Math.random() * 10) //sorteia um número de 0 a 9
        h3.style.color = cores[cor] //define a cor do elemento h3
        dvNome.appendChild(h3) //adiciona o elemento h3 à div
    }
})
