const frm = document.querySelector('form') //obtém os elementos da página
const resp = document.querySelector('h3')
const qnt = document.querySelector('span')

//Botão "Adicionar Serviço"
frm.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const addServico = frm.inServico.value //recebe o serviço informado na tela
    
    inserirServico(addServico) //chama a função que salva o serviço
})

//botão "Executar Serviço"
frm.btExecutar.addEventListener('click', () => {
    const vetorServicosExixtentes = localStorage.getItem('servicos').split(';') //busca serviços salvos no localStorage
    let servicoAtual = vetorServicosExixtentes.shift() //remove o primeiro item inserido no array
    localStorage.setItem('servicos', vetorServicosExixtentes.join(';')) //atualiza os serviços no localStorage
    resp.innerText = servicoAtual //apresenta no painel o serviço que está sendo executado
    atualizarServicos() //atualiza a quantidade de serviços pendentes
})

//function que salva o serviço no localStorage
const inserirServico = (servico) => {
    const servicosExixtentes = localStorage.getItem('servicos') //busca serviços salvos no localStorage

    //se não houver serviços registrados
    if(!servicosExixtentes) {
        localStorage.setItem('servicos', servico) //inicia "servicos no localStorage"
    } else { //se já houver adiciona um novo
        localStorage.setItem('servicos', servicosExixtentes + ';' + servico)
    }
    frm.reset() //apaga campo de digitação
    frm.inServico.focus() //coloca o cursor no campo de digitação
    atualizarServicos() //chama function que atualiza o número de serviços pendentes
}

//function que atualiza o número de serviços pendentes
const atualizarServicos = () => {
    const servicosExixtentes = localStorage.getItem('servicos') //busca serviços salvos no localStorage
    const qntServicos = servicosExixtentes ? servicosExixtentes.split(';').length : 0 //faz a contagem dos serviços na fila
    qnt.innerText = qntServicos
}
window.addEventListener('load', atualizarServicos) //atualiza a quantidade de serviços sempre que a página é aberta