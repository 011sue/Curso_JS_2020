console.log('01', 'teste', '1' == 1) //true
console.log('02', '1' === 1) //false
console.log('03', '3' != 3) 
// false mesmo sendo string e nome, retornam o mesmo dado
console.log('04', '3' !== 3) 
// true, um é tipo string e outro tipo number
console.log( 3 < 2 ) // false
console.log( 3 > 2) // true

const d1 = new Date(0)
const d2 = new Date(0)
console.log( d1 === d2)
console.log( d1 === d2)
//ambos falsos

console.log(d1.getTime() === d2.getTime())
/* getTime retorna o valor numérico correspondente 
ao horário da data especificada de acordo com o horário universal. 
Você pode usar este método para atribuir uma data e horário a outro objeto Date . 
Este método é funcionalmente equivalente ao método valueOf() */

console.log (undefined == null) // iguais
console.log (undefined === null) // extritamente iguais
