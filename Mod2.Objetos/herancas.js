// Herança levar atributos de um obj para outro sem precisar ficar repetindo
// reutilização de codigo

/* busca no pai, senão encontrar busca no avo etc
*/

const porshe = {
    modelo: 'f40',
    velMax: 324
}

const mustangue = {
    modelo: 'V40',
    velMax: 200
}

console.log(porshe.__proto__) 
// '2x _ proto 2x _' a partir deste ponto voce consegue acessar o prototipo

console.log(porshe.__proto__ == Object.prototype) // true

console.log(mustangue.__proto__ == Object.prototype)

console.log(Object.prototype.__proto__)


console.log('-----------------------------------------------------')
// EX.2 HERANÇA
// Cadeia de prototipos (prototype chain)

Object.prototype.attr0 = '0' // evitar utilização
const avo = { attr1: 'A'}
const pai = {__proto__: avo, attr2: 'B'}
const filho = {__proto__: pai, attr3: 'C'}
console.log(filho.attr0, '= chama de Obj ', filho.attr1, '= chama de avo ', filho.attr2, '= chama de pai ', filho.attr3, '= chama de filho ')

console.log('-----------------------------------------------------')

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){ 
        // Função acelerar recebe parametro Delta
        // delta representa diferença que quer acelerar
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
            // se velocidade atual + delta é menor velMax = pode acelerar
        } else {
            this.velAtual = this.velMax
        } // Senão velMax = velocidade atual
    },
    status(){ 
        // função status para mostrar valor no console
        return `${this.velAtual} km/h de ${this.velMax} km/h`

    }
}

// Objeto
const ferrari = {
    modelo: 'F40',
    velMax: 324 
    // shadowing sobreamento da função do escopo abrangente/externo
}
// Objeto
const volvo = {
    modelo: 'V40',
    status() {
        // super = chamar o metodo do prototipo
        return `${this.modelo} : ${super.status()}`
        // super = referenciar prototipo
        // sobreamento/sobescrevendo da função status  

    }
}

Object.setPrototypeOf(ferrari, carro) 
// ferrari tem carro como seu prototipo
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100) // de 0 a 100
console.log('Volvo velocidade: ', volvo.status())
/* por padrão quando voce chama um obj, e o to.string que converte o obj pra string é chamado
ele vai ler os atributos e funcoes que pertencem ao obj
porém não quer dizer que irá exibir na tela
mas você consegue chama com:
*/

volvo.acelerarMais(100)
console.log(volvo.status())
// ele apresenta o modelo e vai chamar o super do status

ferrari.acelerarMais(300)
console.log(ferrari.status()) 
// o return status le a velocidade max de ferrari, nao de carro

console.log('-----------------------------------------------------')

// EX 3 HERANÇA

// Object.create = criar um objeto com prototipo de outro

// Objetos:
const pai = {nome: 'José', corCabelo: 'preto'
}

const mae = {nome: 'Maria', corOlhos: 'azuis'
}

const filha1 = Object.create(pai) // definir prototipo = pai
filha1.nome = 'Suellen'
console.log('Filha 1:', filha1.nome, ' tem cabelos ', filha1.corCabelo)

const filha2 = Object.create(mae, { // definir mae como prototipo
    nome: {value: 'Isa', writable: false, enumerable: true}
}) // primeiro parametro mae, segundo parametro/atributo nome.

console.log(' Filha 2: ',filha2.nome)
filha2.nome = 'Lari' // não é possivel alterar porque writable esta false
console.log(`${filha2.nome} tem olhos ${filha2.corOlhos} iguais de sua mae ${mae.nome}!`)

console.log(' ATRIBUTOS QUE NÃO SÃO HERANÇA: ')
console.log('Filha 1 ', Object.keys(filha1))
console.log('Filha 2 ',Object.keys(filha2))


for(let key in filha2) { // TODOS ATRIBUTOS
    console.log('Atributos gerais da filha 2: ',key)
}

for(let key in filha1){
    filha1.hasOwnProperty(key) ?
    // forma para saber se pertence ao proprio obj ou por herança
        console.log('Da filha:',key) : console.log(`Por herança: ${key}`)  
        // true - se pertencer exibir como obj
        // false - senao, por herança
}

console.log('-----------------------------------------------------')

// EX 4 - HERANÇA

/* 
Conceito de prototipo: 
è ter um link que vai te vinculando a outros objetos

Atibuto prototype: todas tem
__proto__ : conceito de como um obj referencia seu prototipo
*/

// cria uma function
function MeuObjeto() {}
console.log(MeuObjeto.prototype) // tipo: objeto

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
// todos obj criado a partir de uma função construtora apontam pro mesmo prototipo a partir do atributo __proto__
console.log('obj1 é extritamente igual obj2: ', obj1.__proto__ === obj2.__proto__)
console.log('MeuObjeto é extritamente igual obj1/obj2: ', MeuObjeto.prototype === obj2.__proto__)
// quando voce cria um obj a paritr de um função construtora usando new, 
// o prototipo do obj automaticamente aponta pra função que você criou.prototype

MeuObjeto.prototype.nome = 'Anonimo'
// atibuir valor 
// qualquer obj que for criado a partir de uma função construtora
// terá um atributo nome em obj pai
MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia! Meu nome é ${this.nome}`)
}

obj1.falar()

obj2.nome = 'Rafael' // sobescrever o nome do obj pai
obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype
obj3.nome = 'obj3'
obj3.falar()

