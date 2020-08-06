function soma() {
    let soma = 0
    for (i in arguments) {
        soma += arguments[1]
    }
    return soma
}
// arg é um array interno de uma função

console.log(soma()) // zero
console.log(soma(1)) // não retornou ceto
console.log(soma(1.1, 2.2, 3.3)) // não retornou certo
console.log(soma(1.1, 2.2, "Teste")) // concatenação dos valores com teste
// não retornou certo
console.log(soma('a', 'b', 'c')) // não retornou certo

// curso não funcionou como o esperado

