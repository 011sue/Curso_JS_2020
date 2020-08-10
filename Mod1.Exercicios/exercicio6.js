/* 06)​ Elabore duas funções que recebem três parâmetros: 
capital inicial, taxa de juros e tempo de aplicação. 
A primeira função retornará o montante da aplicação financeira sob o regime de juros simples 
e a segunda retornará o valor da aplicação sob o regime de juros compostos.  */

function tresparam ( capInit, txJuros, tAplic){ -- CORRETO
    let resultado ((capInit * txJuros) * tAplic) -- ERRADO

    return resultado
}

console.log(tresparam(10, 0.25, 12))

// CORREÇÃO 6

function jurosSimples (capitalInicial, taxa, tempo) {
    return capitalInicial + (capitalInicial * taxa * tempo)
}

function jurosCompostos (capitalInicial, taxa, tempo) {
    return capitalInicial * (1 + taxa) ** tempo
}

console.log(jurosSimples(100, 10/100, 2));
console.log(jurosCompostos(100, 10/100, 2));