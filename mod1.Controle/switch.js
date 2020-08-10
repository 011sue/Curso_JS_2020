const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10: case 9:
            console.log(nota + ' Excelente nota')
 break
        case 8: case 7: case 6:
            console.log(nota + ' Aprovado')
 break
        case 5: case 4:
            console.log(nota + ' Recuperação')
 break
        case 2: case 1:
            console.log(nota + ' Reprovado')
 break
        case 0:
            console.log(nota + 'Indisponivel')
 break
        default:
            console.log('Não foi possivel acessar..')

        }
}

imprimirResultado()
imprimirResultado(1)
imprimirResultado(4)
imprimirResultado(6)
imprimirResultado(9)