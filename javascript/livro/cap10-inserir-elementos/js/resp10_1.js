const frm = document.querySelector("form"); //obtém os elementos da página
const dvVelas = document.querySelector('#divVelas')

frm.addEventListener('submit', (e) => {
    e.preventDefault()

    const idade = Number(frm.inIdade.value) //valor informado pelo usuário

    if(idade < 0 || idade > 120) { //validação de regras de idade
        alert('Informe uma idade válida entre 0 e 120 anos.')
        frm.inIdade.focus()
        return
    } else {
        inserirVelas(idade) //chama a função inserirVelas passando a idade como argumento
    }
})

const inserirVelas = (idade) => {
    const strIdade = idade.toString() //converte a idade para string

    //laço para ler cada caractere da string idade
    for(let num of strIdade) {
        const imagem = document.createElement('img') //cria o elemento imagem
        imagem.src = 'img/' + num + '.jpg' //atributo src
        imagem.alt = 'Vela com o número ' + num //atributo alt
        dvVelas.appendChild(imagem) //hierarquia DOM
    }
}

frm.addEventListener('reset', () => {
    location.reload() //recarrega a página
})