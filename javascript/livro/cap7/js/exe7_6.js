const frm = document.querySelector('form') //obtém os elementos da página

const TAXA_MULTA = 2/100 //valor da multa por atraso
const TAXA_JUROS = 0.33/100 //valor dos juros diarios por atraso

frm.addEventListener('submit', (e) => { //ouvinte de ação no front
    e.preventDefault() //evita o envio do form

    const dataVenc = frm.inData.value
    const valor = Number(frm.inValor.value)
    const hoje = new Date() //cria variável instanciando o dia atual
    const vencto = new Date()

    const partes = dataVenc.split('-') //data vem no formato aaaa-mm-dd
    vencto.setDate(Number(partes[2]))
    vencto.setMonth(Number(partes[1]) -1)
    vencto.setFullYear(Number(partes[0]))

    const atraso = hoje - vencto //calcula a diferença de dias entre as datas (em milissegundos)
    let multa = 0 //multa iniciada com 0
    let juros = 0 //juros iniciado com 0

    if(atraso > 0) { //se a conta estiver atrasada
        //conversão do atraso em dias (1 dia = 24h * 60min * 60seg * 1000ms: 86400000)
        const dias = atraso / 86400000
        multa = valor * TAXA_MULTA //calculo da multa e dos juros
        juros = valor * TAXA_JUROS * dias
    }

    const total = valor + multa + juros //calcula o total

    frm.outMulta.value = multa.toFixed(2) //exibição dos valores no front
    frm.outJuros.value = juros.toFixed(2)
    frm.outTotal.value = total.toFixed(2)
})