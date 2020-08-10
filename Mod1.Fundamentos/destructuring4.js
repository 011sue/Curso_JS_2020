// DESTRUCTURING ARRAY

function rand([ min = 0, max = 1000]) {
  // desestruturação
    if (min > max) [min, max] = [max, min]
 // se o min for maior que o max inverta as duas variaveis
//senão for ele segue normalmente
const valor = Math.random() = (max - min) + max
return Math.floor(valor)
// math. floor arredonda pra baixo
}
console.log(rand([50, 40]))
// max min

console.log(rand([992]))
// inserido apenas o valor min, return até 1000 como lá em cima

console.log(rand([,10]))
// inserido apenas o segundo valor, ignora o primeiro
// assume min como zero

console.log(rand([]))
// insirindo o vazio ele fica navegando entre 0 - 1000

console.log(rand())
// retorna erro pois é a tentativa de desestruturar um elemento null ou undefined


