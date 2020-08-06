const [a] = [10]
console.log('array recebe ', a)


const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)
// n1 recebe 10
//n3 recebe 9
//n5 undefined
//n6 recebe 0
// n2, n4 ignorados

const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
// primeiro item ignorado
// dentro é um array,
// primeiro item dentro do array é ignorado
// segundo item dentro é nota
// nota = 6
console.log('nota recebe', nota)
// pouco utilizado

