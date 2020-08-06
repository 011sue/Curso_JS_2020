// DUAS FORMAS DIFERENTES DE CHAMAR UMA FUNCTION

function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1+ imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

console.log(produto.getPreco())


// CRIAR A FUNCTION
const carro = { preco: 49990, desc: 0.20}

// CALL
console.log(getPreco.call(carro))
// quando eu passo via call ( contexto, parametro, parametro)
 console.log(getPreco.call(carro, 0.17, '$'))

// APPLY
console.log(getPreco.apply(carro))
// quando passo via apply (carro, [ parametro, parametro]) necessario abrir array
console.log(getPreco.apply(carro, [0.17, '$']))

