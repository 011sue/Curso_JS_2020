// function declaration

console.log('soma 10+20 é ', soma(10, 20)) // pode usar o console antes
function soma(x, y) {
    return x + y
}

// function expression
// usa const ou let
const sub = function (x, y){
    return x - y
}
console.log('sub de 100-50 é ', sub(100, 50))

// named function expression
// nomear a função
// beneficio na hora de debugar pois retorara o nome da function
const mult = function mult(x, y){
    return x * y
}
console.log('mult de 10x2 é ', mult(10, 2))
