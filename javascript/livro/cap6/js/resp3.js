/*
 1) Receber nomes e número de acertos de cada aluno
 2) Botão de enviar os dados (não permitir dados em branco)
 3) Listar os dados a cada inclusão
 4) Botão "Aprovados 2ª Fase" para validar notas e apresentar apenas os aprovados com notas em ordem decrescente
 5) Ao clicar no botão "Aprovados 2ª Fase" apresentar alert para inserir a nota de corte
 6) Não havendo aprovados exibir mensagem informando
 */
const frm = document.querySelector('form') //seleciona o formulário
const resp = document.querySelector('pre') //seleciona a tag pre

const candidatos = [] //array para armazenar os candidatos

frm.addEventListener('submit', (e) => { //escuta o evento de submit do formulário
    e.preventDefault() //evita o envio do formulário
    const candidato = frm.inNome.value //obtém nome do candidato
    const acertos = Number(frm.inAcertos.value) //obtém o número de acertos do candidato
    if (!candidato || !acertos) { //verificação de campos vazios
        alert('os campos não podem ser enviados em branco')
        return
    }
    candidatos.push({nome: candidato, acertos: acertos}) //adiciona o candidato ao array
    frm.reset() //limpa o formulário
    inNome.focus() //foca no campo de digitação
    frm.btListar.dispatchEvent(new Event('click')) //dispara evento listar a cada inserção de dados
})

frm.btListar.addEventListener('click', () => { //escuta o click do botão listar
    let lista = 'Candidatos: \n'
    if (candidatos.length == 0) { //se o array estiver vazio
        alert('Sem candidatos cadastrados!!')    
    }
    for (const candidato of candidatos) {
        lista += candidato.nome + " - " + candidato.acertos + " acertos\n"
    }
    resp.innerText = lista //mostra dados inseridos na tela 
})

frm.btAprovados.addEventListener('click', () => { //botão de aprovados
    if (candidatos.length == 0) { //validação de array preenchido
        alert('Sem candidatos cadastrados!')
        return
    }

    let qtdAcertos = Number(prompt('Insira a nota de corte.'))
    if (isNaN(qtdAcertos)) { //validação de preenchimento de variável
        alert('É necessário informar uma nota de corte!')
        return
    }

    const copia = [...candidatos] //cópia do array original
    copia.sort((a,b) => b.acertos - a.acertos) //ordenação por nota
    
    let aprovados = '' //variável de concatenação
    let final = 'Aprovados:\n' //variável que será apresentada no painel
    for (const candidato of copia) { //percorre o array
        if ( candidato.acertos >= qtdAcertos) { //validação de aprovação
            aprovados += candidato.nome + ' - ' + candidato.acertos + ' acertos\n'
        }
    }

    if (aprovados == '') { //validação de aprovados
        final = 'Sem alunos aprovados, são todos burros!'
    } else {
        final += aprovados
    }
    resp.innerText = final
})