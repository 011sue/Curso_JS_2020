const peso1 = 1.0
const peso2 = Number('2.0') // passar numero como string

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
// para saber se é um valor inteiro
// retorna true ou false

const avaliacao1 = 9.123
const avaliacao2 = 8.999

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))
// toFixed(n) fixa a quantidade de casas decimais que você deseja que seja exibida
console.log(media.toString(2))
// toString() converte em binario
console.log(typeof media) 
// tipo de dados
console.log(typeof Number)
//Number função number tipo dado