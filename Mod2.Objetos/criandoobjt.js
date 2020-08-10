// usando a notação literal
// 

const obj1 = {

}

console.log(obj1)

// Objeto em JS -- Função construtora

console.log(typeof Object, typeof new Object)
                 // function         // objeto
const obj2 = new Object
console.log(obj2)             


// Funções construtoras
function Produto(nome, preco, desc){
    this.nome = nome 
    // torna a function publica e transforma em obj
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 1.99, 0.10)
const p2 = new Produto('Notebook', 3000.00, 0.25)
console.log('O preço da caneta é ', p1.getPrecoComDesconto())
console.log('O preço do notebook é ',p2.getPrecoComDesconto())


// Função Factory
// Função que cria/fabrica alguma coisa ex. Objeto
// getSalario calcula o salario com base nas faltas que o func teve 

function CriarFuncionario(nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = CriarFuncionario('João', 7998, 4)
const f2 = CriarFuncionario('Maria', 11490, 1)
const f3 = CriarFuncionario('Suellen', 3429, 0)
console.log('Salario de Suellen ', f3.getSalario())
console.log('Salario de Maria ', f2.getSalario())
console.log('Salario de João ', f1.getSalario())

// Object.create

const filha = Object.create(null)
filha.nome = 'Isa'
console.log(filha)

// criando obj com JSON
//JSON sempre com aspas duplas " ---- "
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)