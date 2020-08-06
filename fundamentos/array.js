// estrutura de agrupamento de forma linear

const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
// retornou o primeiro e o quarto item
console.log(valores[4])
// o valor não existe então retorna "Undefined"

console.log(valores.length)
// .length consulta a quantidade de dados dentro do array

valores.push({id: 3}, false, null, 'teste')
console.log(valores)
// .push inclui novos dados dentro de um array

console.log(valores.pop())
// .pop pega o ultimo valor do array 
// funciona como delete

delete valores[0]
// deleta o primeiro valor

console.log(typeof valores)
// retorna que array é um objeto


