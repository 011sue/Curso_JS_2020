// notação literal

const pessoa = {
    nome: 'Suellen',
    idade: 24,
    peso: 64,
    CPF: '426.100.200-18'

}
console.log(Object.keys(pessoa)) // busca os nomes das variaveis
console.log(Object.values(pessoa)) // busca os dados
console.log(Object.entries(pessoa))
console.log('-----------------------------------------')
// retorna sub arrays com keys e values

Object.entries(pessoa).forEach( e => {
  console.log(`${e[0]} : ${e[1]}`)
  console.log('------')
})
console.log('-----------------------------------------')
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})
console.log('-----------------------------------------')

// chamar uma função para alterar/incluir uma propriedade definindo ações
Object.defineProperty(pessoa, 'DataNascimento', {
    enumerable: true, // aparecerá na lista?
    writable: false, // aceita ser modificada?
    values: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017' // ela freeza a anterior e não aceita substituição
console.log(pessoa.dataNascimento)
//
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)
// pega todos os atributos posteriores e coloca no obj destino
const destino = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 } // sobrescreve A: 1
const obj = Object.assign(destino, o1, o2)

console.log(obj)

