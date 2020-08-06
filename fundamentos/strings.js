const aluno = 'Suellen'
console.log(aluno.charAt(4))
// CharAt retorna a 4° letra - iniciando a contagem por 0
console.log(aluno.charCodeAt(1))
// charCodeAt localiza o valor do dado na tabela unicode
console.log(aluno.indexOf('n'))
// caso eu queira localizar o dado dentro da string
console.log('---------------')
console.log(aluno.substring(1))
// exibi do dado 1 até o final
console.log(aluno.substring(0, 3))
// exibi do 0 até o 2 dado, sem incluir o 3 dado
console.log('Aluno ' .concat(aluno).concat('!'))
// .concat concatena valores de dados diferente
// ou pode-se usar o + no lugar
console.log('Aluno '+ aluno +'!')
//fica exatamente igual
console.log(aluno.replace(3, 'y'))
// substitua o terceiro dado por 'e'
console.log(aluno.replace(/\w/g, '1'))
// expressão regular /\d/ -- numeros
// expressão regular /\w/g -- todos os dados

console.log('Maria, Jose, Suellen, Isa'.split(','))
// .split converte para array (agrupador de variaveis)

