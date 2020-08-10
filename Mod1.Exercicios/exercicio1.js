//01)​ Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração, multiplicação e divisão desses valores. 

const soma = function (a, b){
console.log(a+b)
}
soma(2, 4)

const div = function (c, d){
    console.log(c/d)
}
div(10, 5)

const sub = function (e, f){
    console.log(e-f)
}
sub(20,5)

const mult = function (g,h){
    console.log(g*h)
}
mult(2, 5)

// CORREÇÃO 1
function calcularOperacoes (operador1, operador2) {
    console.log('soma ', operador1+operador2,'subtração ', operador1-operador2, 'multiplicação ', operador1*operador2, 'divisão ', operador1/operador2);
}

calcularOperacoes(1, 2)
