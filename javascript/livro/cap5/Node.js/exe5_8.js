const prompt = require('prompt-sync')()
console.log('Programa anos de copa do mundo Digite 0 para sair')
console.log('------------------------------------------------')

do {
    var ano = Number(prompt('Ano: '))
    if (ano == 0) {
        break  //sai da repetição
    } else if (ano == 1942 || ano == 1946) {
        console.log('Sem copa do mundo no ano ' + ano + '(Segunda Guerra Mundial)')
    } else if (ano >= 1930 && ano % 4 == 2) {
        console.log('Houve copa do mundo no ano ' + ano)
    } else {
        console.log('Não... ' + ano + ' não é ano de copa do mundo')
    }
} while (true)