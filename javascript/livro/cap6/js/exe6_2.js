//obtém elementos da página
const frm = document.querySelector('form')
const respErros = document.querySelector('#outErros')
const respChances = document.querySelector('#outChances')
const respDica = document.querySelector('#outDica')

const erros = [] //array global com valores já apostados
const sorteado = Math.floor(Math.random() * 100) + 1 //número aleatório entre 1 e 100
const CHANCES = 6 //variável global com número de chances

frm.addEventListener('submit', (e) => { //escuta evento submit do form
    e.preventDefault() //evita envio do form
    
    const numero = Number(frm.inNumero.value) //obtém o número digitado
    if (numero == sorteado) {//acertou miseravi
        respDica.innerText = `Parabéns! Número sorteado: ${sorteado}`
        frm.btSubmit.disabled = true //desabilita o botão de submit
        frm.btNovo.className = 'exibe'
    } else {
        if (erros.includes(numero)) { //se o número já existe no vetor erros (já apostou)
            alert('Você já apostou esse número. Tente outro...')
        } else {
            erros.push(numero) //adiciona o número ao vetor
            const numErros = erros.length //obtém o tamanho do vetor
            const numChances = CHANCES - numErros //calcula as chances restantes
            //exibe o número de erros, contúdo do vetor e nº de chances
            respErros.innerText = `Erros: ${numErros} (${erros.join(', ')})`
            respChances.innerText = numChances

            if (numChances == 0) {
                alert('Suas chances acabaram!')
                frm.btSubmit.disabled = true //desabilita o botão de submit
                frm.btNovo.className = 'exibe'
                respDica.innerText = `Game Over! Número sorteado: ${sorteado}`
            } else {
                //usa operador ternário para mensagem da dica
                const dica = numero < sorteado ? 'maior' : 'menor'
                respDica.innerText = `Dica: Tente um número ${dica} que ${numero}`
            }
        }
    }
    frm.inNumero.value = '' //limpa o campo de entrada
    frm.inNumero.focus() //posiciona o cursor no campo de entrada

    frm.btNovo.addEventListener('click', () => { //escuta evento click do botão novo jogo
        location.reload() //recarrega a página
    })
})