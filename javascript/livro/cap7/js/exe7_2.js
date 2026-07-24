const frm = document.querySelector('form') //recebe elementos da página
const resp = document.querySelector('span')

frm.addEventListener('submit', (e) => { //ouvinte de envio de informações do front
    e.preventDefault() //evita o envio do formulário
    const fruta = frm.inFruta.value.toUpperCase() //coloca o conteúdo da variável como maiúsculas
    let resposta = '' //inicializa variável de resposta

    for (const letra of fruta) { //loop para percorrer a palavra
        if (letra == fruta.charAt(0)) {//se letra igual a letra inicial da string    
            resposta +=fruta.charAt(0) //adiciona a letra inicial
        } else {
            resposta += '_' //adiciona sublinhado
        }
    }

    resp.innerText = resposta //exibe a resposta
    frm.inFruta.value = '*'.repeat(fruta.length) //preenche com * conforme o tamanho da fruta
})