// EVITANDO MODIFICAÇÕES
// TECNICAS

// Object.preventExtensions 
// não permite que o objeto seja estendido
// permite excluir ou modificar mas não permite adicionar

//Object.isExtensible
// retorna se o objeto é extensivel ou não

//OBJETO
const petx = Object.preventExtensions({
    nome: 'Cachorro', preco: 200.99, tag: 'Promoção'
})
console.log('Extensivel: ', Object.isExtensible(petx)) // false
console.log(petx)

petx.nome = 'Gato' // permite
petx.descricao = 'Animal independente' // não permite
console.log(petx) // com tag
delete petx.tag
console.log(petx) // sem tag

// Object.seal
// selar obj, não consegue adiconar, nem excluir, mas consegue modificar os atributos existentes

//OBJETO
const bolo = { sabor: 'Chocolate', peso: 3}
Object.seal(bolo)
console.log('Selado:', Object.isSealed(bolo)) // True
console.log(bolo)

bolo.cobertura = 'Brigadeiro' // não permite
delete bolo.sabor // não permite
bolo.peso = 2 // permite
console.log(bolo)

// Object.freeze == Selado + valores constantes
// não permite nenhum tipo de alteração