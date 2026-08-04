const frm = document.querySelector('form') //recebe elementos do front
const resp = document.querySelector('h3')

const DESCONTO = 20/100

frm.addEventListener('submit', (e) => { //ouvinte de envio do formulário
    e.preventDefault()

    //inicialização de variáveis
    const data = frm.inData.value
    const valor = frm.inValor.value
    const dataVencimento = new Date()
    
    const dataPartes = data.split('-') //separação de cada elemento de data
    const dataInformada = new Date(Number(dataPartes[0]), Number(dataPartes[1]) - 1, Number(dataPartes[2]))
    dataVencimento.setDate(Number(dataPartes[2]))
    dataVencimento.setMonth(Number(dataPartes[1])+2)
    dataVencimento.setFullYear(Number(dataPartes[0]))

    if(dataVencimento < dataInformada) {
        dataVencimento.setFullYear(Number(dataPartes[0])+1)
    }

    const dia = String(dataVencimento.getDate()).padStart(2, '0')
    const mes = String(dataVencimento.getMonth() +1).padStart(2, '0')
    const ano = dataVencimento.getFullYear()

    const dataFormatada = `${dia}/${mes}/${ano}`
    const valorPagamento = valor - (valor * DESCONTO)

    resp.innerText = `Data limite para pagamento com desconto: ${dataFormatada}!\n\nValor com desconto: ${valorPagamento}!`
})