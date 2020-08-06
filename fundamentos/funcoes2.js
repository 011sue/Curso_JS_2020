// AMARZENAR UMA FUNÇÃO DENTRO DE UMA VARIAVEL
/*function imprimirSoma = function ()
função sem nome / anonima

*/

const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 10)

// AMARZENAR UMA FUNÇÃO ARROW EM UMA VARIAVEL
// => substitui o nome function
const soma = (a, b) => {
    return a + b
}
console.log(soma(4, 7))

// RETORNAR IMPLICITO
/*contido numa proposição mas não expresso formalmente; 
não manifestamente declarado; 
subentendido, tácito.

** usar o return sem usar a palavra*/

const subtracao = (a, b) => a - b 
    console.log(subtracao(20, 19))
/* quando não tem {} significa que a função tem apenas 1 linha
ou seja uma unica sentença de codigo*/

const imprimir2 = a => console.log(a)
imprimir2 ('Legal!!')
