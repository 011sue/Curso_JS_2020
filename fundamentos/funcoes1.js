// FUNÇÕES PARTE 2

// função sem retorno
// não utilizou const nem var nem let

function imprimirSoma(a, b) /*1*/ {
    console.log(a+b) /*3*/
}

imprimirSoma(2, 3) /*2*/

imprimirSoma(2) /* NaN - retorna undefined
porque você soma um valor int com undefined
*/
imprimirSoma(2, 10, 4, 5)
// os dois primeiros e ignora o restante

imprimirSoma() // NaN

// FUNÇÃO COM RETORNO

function soma(a, b = 0) {
// 0 é valor padrão quando o valor não for passado na chamada da função
// pode deixar outros valores 
return a + b
}

console.log(soma(2, 3)) // retorna 5
console.log(soma(2)) // retorna 2 porque calcula com o 0 padrão

console.log(soma()) // NaN

