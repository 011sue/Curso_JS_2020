// COMO É UM OP NEW

function Curso(nome, videoID){
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Curso('Aula 1', 111)
const aula2 = new Curso('Aula 2', 222)

console.log(aula1, aula2)

// CRIANDO UM OP NEW
// ... = spread

function novo(f, ...params){ // recebe f = função, ...params (varios parametros)
    const obj = {} // como está simulando new, utiliza-se notação literaria
    obj.__proto__ = f.prototype // associa-se o atributo do obj ao prototype
    f.apply(obj, params)// passa-se os parametros
    return obj
}

const aula3 = novo(Curso, 'Aula 3', 333)
const aula4 = novo(Curso, 'Aula 4', 444)
console.log(aula3, aula4)