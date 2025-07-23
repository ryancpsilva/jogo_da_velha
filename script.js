let arr = [
    ['','',''],
    ['','',''],
    ['','','']
]
let avaliador = 0

function clicou(cel) {
    let celula = document.getElementById(`${cel}`)
    let paragrafo = document.getElementById('paragrafo')
    // Verificação de término de jogo
    if (avaliador == -1) {
        return paragrafo.textContent = 'Aperte Reiniciar para começar um novo jogo!!'
    }
    // Verificação de Valor a ser inserido na célula
    if (avaliador % 2 != 0) {
        cel >= 0 && cel < 3 ? arr[0][cel%3] = 'o': false
        cel >= 3 && cel < 6 ? arr[1][cel%3] = 'o': false
        cel >= 6 ? arr[2][cel%3] = 'o': false
        celula.textContent = 'O';
        avaliador++;
        teste(arr)       
    } else {
        cel >= 0 && cel < 3 ? arr[0][cel%3] = 'x': false
        cel >= 3 && cel < 6 ? arr[1][cel%3] = 'x': false
        cel >= 6 ? arr[2][cel%3] = 'x': false
        celula.textContent = 'X';
        avaliador++;
        teste(arr)       
    }
}
const teste = (arr) => {   
     // Verificação linha
    arr.map( (item) => {
        if (item.every(item => item =='x')) {
            return ganhou('X', 'por Linha!')
        } 
        if (item.every(item => item =='o')) {
            return ganhou('O', 'por Linha')
        } 
    })
    // Verificação coluna
    let l0 =[]
    let l1 = []
    let l2 = []
    arr.forEach(item => {
        l0.push(item[0])
        l1.push(item[1])
        l2.push(item[2])
    })
    if (l0.every(item => item == 'x')||l0.every(item => item == 'o')) {
        return ganhou(l0[0].toUpperCase(), 'por Coluna 1')
    }
    if (l1.every(item => item == 'x')||l1.every(item => item == 'o')) {
        return ganhou(l1[0].toUpperCase(), 'por Coluna 2')
    }
    if (l2.every(item => item == 'x')||l2.every(item => item == 'o')) {
        return ganhou(l2[0].toUpperCase(), 'por Coluna 3')
    }
    // Verificação diagonal
    if (arr[0][0] == arr[1][1] && arr[0][0] == arr[2][2] && arr[0][0] != '') {
        return ganhou(arr[0][0].toUpperCase(), 'por Diagonal Descendente')
    }
    if (arr[0][2] == arr[1][1] && arr[0][2] == arr[2][0] && arr[0][2] != '') {
         return ganhou(arr[0][2].toUpperCase(), 'por Diagonal Ascendente')
    }

}
function ganhou(val, msg) {
    // Mensagem de Vencedor
    console.log(`Parabéns ${val} ganhou`);
    let paragrafo = document.getElementById('paragrafo')
    paragrafo.textContent = `Parabéns ${val} ganhou por ${msg}`
    avaliador = -1
}
function reiniciar() {
    //Zerar os elementos utilizados
    let celula = document.getElementsByClassName('celula')
    for (i in celula) {
        celula[i].textContent = ''
    }
    let paragrafo = document.getElementById('paragrafo')
    paragrafo.textContent = ''
    arr = [
    ['','',''],
    ['','',''],
    ['','','']
    ]
    avaliador = 0
}