const frm = document.querySelector('form') //obtém os elementos da página
const dvPalco = document.querySelector('#divPalco')

const POLTRONAS = 240 //constante com o número de poltronas do teatro
const reservadas = [] //vetor com as poltronas reservadas

window.addEventListener('load', () => {
    //operador ternário: se houver dados salvos no localStorage faz um split(';') e atribui esses dados ao array, caso contrário o array é iniciado vazio
    const ocupadas = localStorage.getItem('teatroOcupadas') ? localStorage.getItem('teatroOcupadas').split(';') : []

    //repetição para montar o n° total de poltronas definidas pela constante
    for(let i = 1; i <= POLTRONAS; i++) {
        const figure = document.createElement('figure') //cria a tag figure
        const imgStatus = document.createElement('img') //cria a tag img

        //se a posição consta em ocupadas, exibe a imagem ocupada, senão, disponível
        imgStatus.src = ocupadas.includes(i.toString()) ? 'img/ocupada.jpg' : 'img/disponivel.jpg'
        imgStatus.className = 'poltrona' //class com dimensão da img
        const figureCap = document.createElement('figcaption') //cria figcaption

        //quantidade de zeros antes do número da poltrona
        const zeros = i < 10 ? '00' : i< 100 ? '0' : ''

        const num = document.createTextNode(`[${zeros}${i}]`) //cria texto

        figureCap.appendChild(num) //define os pais de cada tag criada
        figure.appendChild(imgStatus);
        figure.appendChild(figureCap)

        //se i módulo 24 == 12: (é o corredor: define margem direita 60px)
        if(i % 24 == 12) figure.style.marginRight = '60px'

        dvPalco.appendChild(figure) //indica que é a filha de divPalco

        //se i modulo 24 == 0 insere quebra de linha
        if(i % 24 == 0) {
            dvPalco.appendChild(document.createElement('br'))
        }
    }
})

frm.addEventListener('submit', (e) => {
    e.preventDefault()

    const poltrona = Number(frm.inPoltrona.value) //obtém o conteúdo de inPoltrona

    //valida o preenchimento do campo entrada... não pode ser maior que a const
    if(poltrona > POLTRONAS) {
        alert('Informe um número de poltrona válido')
        frm.inPoltrona.focus()
        return
    }

    const ocupadas = localStorage.getItem('teatroOcupadas') ? localStorage.getItem('teatroOcupadas') : []

    //se a poltrona já está ocupada (já existe em localStorage)
    if(ocupadas.includes(poltrona.toString()) || reservadas.includes(poltrona)) {
        alert(`Poltrona ${poltrona} já está ocupada, escolha outra!`)
        frm.inPoltrona.value = ''
        frm.inPoltrona.focus()
        return
    }

    //captura a imagem da poltrona filha de divPalco, é -1 pois começa em 0
    const imgPoltrona = dvPalco.querySelectorAll('img')[poltrona -1]
    imgPoltrona.src = 'img/reservada.jpg' //modifica atributo da imagem
    reservadas.push(poltrona) //adiciona a poltrona ao vetor de reservadas

    frm.inPoltrona.value = '' //limpa o campo
    frm.inPoltrona.focus() //joga o foco em inPotrona
})

frm.btConfirmar.addEventListener('click', () => {
    if(reservadas.length == 0) {
        alert('Não há poltronas reservadas')
        frm.inPoltrona.focus()
        return
    }

    const ocupadas = localStorage.getItem('teatroOcupadas') ? localStorage.getItem('teatroOcupadas').split(';') : []

    //for decrescente pois as reservas vão sendo removidas a cada alteração da imagem
    for(let i = reservadas.length -1; i >= 0; i--) {
        ocupadas.push(reservadas[i])

        //captura a imagem da poltrona filha de divPalco
        const imgPoltrona = dvPalco.querySelectorAll('img')[reservadas[i] -1]

        imgPoltrona.src = 'img/ocupada.jpg' //modifica atributo da imagem
        reservadas.pop() //remove do vetor a reserva já alterada
    }

    localStorage.setItem('teatroOcupadas', ocupadas.join(';'))
})