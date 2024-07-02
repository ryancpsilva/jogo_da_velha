let a = {a1: '', a2: '', a3: ''};
let b = {b1: '', b2: '', b3: ''};
let c = {c1: '', c2: '', c3: ''};
let avaliador = 0

function clicou(cel) {
    let celula = document.getElementById(`${cel}`)
    
    if (avaliador > 8) {
        console.log('Acabou o jogo!');
        return;
    }

    if (avaliador % 2 != 0) {
        celula.textContent = 'O';
        teste(cel, 'O');
        avaliador++;
    } else {
        a[`${cel}`] = 'x' 
        celula.textContent = 'X';
        teste(cel, 'X');
        avaliador++;
    }
}

function teste(cel, val) {
    switch (cel) {
        case 'a1':
            a['a1'] = val
            break;
        case 'a2':
            a['a2'] = val
            break;
        case 'a3':
            a['a3'] = val
            break;
        default:
            break;
    }    
    switch (cel) {
        case 'b1':
            b['b1'] = val
            break;
        case 'b2':
            b['b2'] = val
            break;
        case 'b3':
            b['b3'] = val
            break;
        default:
            break;
    }    
    switch (cel) {
        case 'c1':
            c['c1'] = val
            break;
        case 'c2':
            c['c2'] = val
            break;
        case 'c3':
            c['c3'] = val
            break;
        default:
            break;
    }    
    if (a['a1'] == a['a2'] && a['a1'] == a['a3'] && a['a1'] != '') {
       ganhou(val, 'a')
    }
    if (b['b1'] == b['b2'] && b['b1'] == b['b3'] && b['b1'] != '') {
       ganhou(val, 'b')
    }
    if (c['c1'] == c['c2'] && c['c1'] == c['c3'] && c['c1'] != '') {
       ganhou(val, 'c')
    }
    if (a['a1'] == b['b1'] && a['a1'] == c['c1'] && a['a1'] != '') {
       ganhou(val, 'r1')
    }
    if (a['a2']== b['b2'] && a['a2'] == c['c2'] && a['a2'] != '') {
       ganhou(val, 'r2')
    }
    if (a['a3'] == b['b3'] && a['a3'] == c['c3'] && a['a3'] != '') {
       ganhou(val, 'r3')
    }
    if (a['a1'] == b['b2'] && a['a1'] == c['c3'] && a['a1'] != '') {
       ganhou(val, 'r7')
    }
    if (a['a3'] == b['b2'] && a['a3'] == c['c1'] && a['a3'] != '') {
       ganhou(val, 'r8')
    }
}
function ganhou(val, letra) {
    console.log(`Parabéns ${val} ganhou`);
    let paragrafo = document.getElementById('paragrafo')
    paragrafo.textContent += `Parabéns ${val} ganhou!`
    avaliador += 9;
    let linha = document.getElementById(`${letra}`) 
    linha.setAttribute('style', 'display:block;')
}
function reiniciar() {
    let celula = document.getElementsByClassName('celula')
    let barra = document.getElementsByTagName('hr')

    
    for (i in celula) {
        celula[i].textContent = ''
    }
    
    let paragrafo = document.getElementById('paragrafo')
    paragrafo.textContent = ''
    
    a = {a1: '', a2: '', a3: ''};
    b = {b1: '', b2: '', b3: ''};
    c = {c1: '', c2: '', c3: ''};
    avaliador = 0
    for(i in barra) {
        barra[i].setAttribute('style', 'display:none;')
    }
}