//Number
//Prototype

// IF, IFELSE, ELSE

Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimirResultado = function (nota ) {
    if(nota.entre(9, 10)) {
        console.log(nota + ' Quadro de honra')
    } else if (nota.entre(7, 8.99)) {
    console.log(nota + ' Aprovado')
    } else if (nota.entre(4, 6.99)) {
        console.log(nota + ' Recuperação')
    } else if (nota.entre(0, 3.99)) {
        console.log(nota + ' Reprovado')
    } else {
        console.log(nota + ' Nota indisponivel')
    }
    console.log('-----------------------')
}

imprimirResultado(2)
imprimirResultado(5.99)
imprimirResultado(7.5)
imprimirResultado(9.9)
imprimirResultado(100)