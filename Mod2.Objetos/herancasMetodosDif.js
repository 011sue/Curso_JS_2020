// Metodos diferentes para usar em herança
// não existe por padrão na API
// * reverse = reverter uma string = gnirts // sue = eus
// * split = quebrar uma string gerando um array [s, t, r, i, n, g]
// * join = juntar tudo novamente
// * first = pegar primeiro elemento

console.log(typeof String) // é uma função
console.log(typeof Array) // é uma função
console.log(typeof Object) // é uma função

// toda função tem um atributo chamado PROTOTYPE
// reverter uma string
String.prototype.reverse = function() {
    return this.split('').reverse().join('')
}
console.log('Escola Infante', 'com reverse', 'Escola Infante'.reverse())

Array.prototype.first = function() {
    return this[0] // retornar o primeiro elemento
}
console.log([1, 2, 3, 4, 5].first()) // retorna 1
console.log(['a', 'b', 'c', 'd', 'e'].first()) // retorna A

String.prototype.toString = function () {
    return 'Lascou tudo'
}
console.log('Escola Infante'.reverse()) // efeito colateral
// ao inves de retornar a string citada,  ele retorna Lascou tudo

