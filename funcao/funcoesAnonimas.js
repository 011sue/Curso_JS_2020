// função anonima é uma função sem nome

// criada uma variavel anonima

const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(3, 4) // retorna 7
imprimirResultado(3, 4, soma) // retorna 7

// Função dentro de função
imprimirResultado(3, 4, function (x, y) {
    return x - y
}) // função anonima retornando -1

// ArrowFunction -- sempre anonima
imprimirResultado(3, 4, (x, y) => x * y) // retorna 12

// atributo dentro de obj
const fefeco = {
    falar: function () {
        console.log('Fefeco')
    }
}

fefeco.falar()


// nova version
const felipe = {
    falar() {
        console.log('Felipe')
    }
}   

felipe.falar()