const frm = document.querySelector('form') //obtém os elementos da página
const dvMoedas = document.querySelector('#divMoedas')

window.addEventListener('load', () => {
    //gera números aleatórios entre 1 e 5 para cada moeda
    const num1_00 = Math.ceil(Math.random() * 5)
    const num0_50 = Math.ceil(Math.random() * 5)
    const num0_25 = Math.ceil(Math.random() * 5)
    const num0_10 = Math.ceil(Math.random() * 5)

    //define o texto alternativo das imagend (acessibilidade)
    const alt1_00 = 'Moedas de um real'
    const alt0_50 = 'moedas de cinquenta centavos'
    const alt0_25 = 'moedas de vinte e cinco centavos'
    const alt0_10 = 'moedas de dez centavos'

    //chama o método criar moedas passando os argumentos
    criarMoedas(num1_00, '1_00.jpg', alt1_00, 'moeda1-00')
    criarMoedas(num0_50, '0_50.jpg', alt0_50, 'moeda0-50')
    criarMoedas(num0_25, '0_25.jpg', alt0_25, 'moeda0-25')
    criarMoedas(num0_10, '0_10.jpg', alt0_10, 'moeda0-10')
})

const criarMoedas = (num, moeda, textoAlt, classe) => {
    //cria o laço de reoetição para inserir vparias imagens de moedas na página
    for(let i = 0; i <= num; i++) {
        const novaMoeda = document.createElement('img') //cria o elemento imagem
        novaMoeda.src =  'img/' + moeda //atributo src
        novaMoeda.textoAlt = textoAlt //texto alterenativo
        novaMoeda.className = classe //classe da moeda
        dvMoedas.appendChild(novaMoeda) //hierarquia DOM
    }
    const br = document.createElement('br') //cria uma quebra de linha
    dvMoedas.appendChild(br)
}

frm.addEventListener('submit', (e) => {
    e.preventDefault()

    const soma = Number(frm.inSoma.value) //valoor informado pelo usuário
    const moedas = dvMoedas.querySelectorAll('img') //obtém img filhas de dvMoedas
    let totalMoedas = 0 //declara e inicializa o acumulador

    //percorre as tags img (em moedas) e verifica a propriedade className
    for(const moeda of moedas) {
        if(moeda.className == 'moeda1-00') {
            totalMoedas += 1 //acumula 1 para moedas de 1 
        } else if(moeda.className == 'moeda0-50') {
            totalMoedas += 0.5 //acumula 0.5 para moedas de 0.50
        } else if(moeda.className == 'moeda0-25') {
            totalMoedas += 0.25 //acumula 0.25 para moedas de 0.25
        } else {
            totalMoedas+= 0.10 //acumula 0.10 para moedas de 0.10
        }
    }
    const div = document.createElement('div') //cria o elemento div
    const h3 = document.createElement('h3') //cria o elemento h3
    
    let mensagem
    //verifica se o valor informado é igual ao total de moedas exibido
    if(soma == totalMoedas.toFixed(2)) {
        div.className = 'alert alert-success' //define a classe da div
        mensagem = 'Parabens, você acertou!!' //mensagem exibida
    } else {
        div.className = 'alert alert-danger' //define a classe da div
        mensagem = `Ops... A resposta correta é ${totalMoedas.toFixed(2)}`
    }

    const texto = document.createTextNode(mensagem) //cria elemento de texto
    h3.appendChild(texto) //texto é filho de h3
    div.appendChild(h3) //h3 é filho da div criada com a function
    dvMoedas.appendChild(div) //div com alerta é filho de divMoedas

    frm.submit.disabled = true //desabilita o botão(resposta já foi exibida)

    frm.addEventListener('reset', () => {
        window.location.reload()
    })
})