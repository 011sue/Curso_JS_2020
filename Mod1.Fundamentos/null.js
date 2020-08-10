// null e undefined


// atribuição por referencia

const a = {name: "Teste"} //{objetos ou funções}
const b = a
b.name = 'Opa'

console.log(a, b)
/* a constante a altera junto com b
motivo: quando b = a, você iguala os ips*/


// atibuição por valor
let c = 3 // primitivos
d = c
d++
console.log(c, d)
/* tipos primitivos se utiliza copia por valor
ou seja, copia porém com valores independentes*/

let valor //não inicializada
console.log(valor) // retorna undefined
console.log(valor2) // retorna Null - is not defined

valor = null /*ausencia de valor
não tem nenhum valor dentro dela 
e nenhum endereço que possua valor 
 valor = null ideal para quando é pra ela não apontar para lugar nenhum 
 (zerar variavel)*/

 console.log(valor.toString()) 
 /* você não pode ler a variavel
não tem nenhuma referencia para tString*/

const produto = {} // objeto
console.log(produto.preco)
/*não apresenta erro
porque o produto está retornando Null,
porém o preço não - retorna undefined
console.log(produto.preco.a) 
retorna que não tem a propriedade a de um produto que está undefinid */
produto.preco = 3.50
console.log(produto)
// retorna com o preco

produto.preco = undefined
console.log(produto)
/* evitar atribuir desta forma
ele substitui o 3.5 por undefined 
o ideal é atribuir zero ou nulo */

console.log(!!produto.preco) 
// uso do !! retorna boolean - false
console.log(produto)

// delete produto.preco - para tirar o atributo

produto.preco = null // sem preço
console.log(!!produto.preco)
/* se produto.preco está setado !! false
 se a variavel estiver null ou undefined 
 você não consegue acessar suas funções e atributos*/
console.log(produto)







