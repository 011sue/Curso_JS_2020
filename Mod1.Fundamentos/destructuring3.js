// DESTRUCTURING OBJETO
/* Crio uma funçaõ chamada rand
passo para ela dois atributos dentro de um operador destructuring
{ min = 0, max = 1000} 
dentro da chaves pois vou passar um objeto dentro dessa função sem precisar usar notação.
*/
function rand ({ min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
console.log(rand({ max: 50, min: 40}))
//{ max: 50, min: 40} é objeto
// rand - valores randomicos - aleatorios

const obj = { max:955, min: 40}
console.log(rand(obj))

console.log(rand ({ min: 955}))
// aqui ele já assume o max 1000 chamado lá em cima

console.log(rand({}))
// aqui passei um obj vazio que retornará entre 0 a 1000 como chamado lá em cima



