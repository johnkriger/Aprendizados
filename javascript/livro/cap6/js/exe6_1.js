// obtém os elementos da página
const frm = document.querySelector('form')
const respNome = document.querySelector('span')
const respLista = document.querySelector('pre')

const pacientes = [] //declara vetor global

frm.addEventListener('submit', (e) => {
    e.preventDefault() //evita o envio do form

    const nome = frm.inPaciente.value //obtém o nome do paciente
    pacientes.push(nome) //adiciona o nome no final do vetor

    let lista = '' //string para concatenar pacientes
    // for tradicional (inicio em 0, enquanto menor que o tamanho do array)
    for (let i = 0; i < pacientes.length; i++) {
        lista += `${i + 1}. ${pacientes[i]}\n`
    }

    respLista.innerText = lista //exibe a lista de pacientes na página
    frm.inPaciente.value = '' //Limpa o campo de entrada
    frm.inPaciente.focus() //posiciona o cursor no campo
})

// adiciona um ouvinte para o evento click no btUrgencia que está no form
frm.btUrgencia.addEventListener('click', () => {
    // verifica se as validações do form estão ok (no caso, paciente is required)
    if(!frm.checkValidity()) {
        alert('Informe o nome do paciente para adicionar na lista de urgência')
        frm.inPaciente.focus() //posiciona o cursor no campo
        return //retorna ao form
    }
    const nome = frm.inPaciente.value //obtém o nome do paciente
    pacientes.unshift(nome) //adiciona o nome no início do vetor
    let lista = '' //string para concatenar pacientes
    //forEach aplicado sobre o array pacientes
    pacientes.forEach((paciente, i) => (lista+= `${i + 1}. ${paciente}\n`))
    respLista.innerText = lista //exibe a lista de pacientes na página
    frm.inPaciente.value = '' //limpa o campo de entrada
    frm.inPaciente.focus() //posiciona o cursor no campo
})

frm.btAtender.addEventListener('click', () => {
    //se o tamanho do vetor = 0
    if(pacientes.length == 0) {
        alert('Não há pacientes na lista de espera')
        frm.inPaciente.focus() //posiciona o cursor no campo
        return //retorna ao form
    }
    const atender = pacientes.shift() //remove do início da fila (e obtém o nome)
    respNome.innerText = atender //exibe o nome do paciente atendido
    let lista = '' //string para concatenar pacientes
    pacientes.forEach((paciente, i) => (lista += `${i + 1}. ${paciente}\n`))
    respLista.innerText = lista //exibe a lista de pacientes na página
})