let num1 = 1
let num2 = 2

num1++
//pos fixada - asc 1 unidade apos o valor da var
console.log(num1)
--num1
// pré fixada - subtrai o valor
console.log(num1)
console.log(++num1 === num2--)
// verdadeiro === extritamente igual
// ++ foi executado antes do -- por ser um pos fixado
