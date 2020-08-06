const imprimirResultado = function(nota) {
    if(nota >= 7) {
        console.log('APROVADO COM ' + nota)
    } else {
        console.log('REPROVADO COM ' + nota)
    }
}
imprimirResultado(6.9)
imprimirResultado(7)
imprimirResultado('Epa') // incorreto