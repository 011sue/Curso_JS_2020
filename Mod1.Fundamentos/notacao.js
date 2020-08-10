// NOTAÇÃO objeto.atributo
console.log(typeof console)
console.log('cONSOLE é objeto')
console.log('---------')
console.log(Math.ceil(6.1)) // arredonda pra + '7'

const obj1 = {}
obj1.nome = '1 - new obj'
// obj1['nome'] = 'bola' - funciona da mesma maneira
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome 
    // this palavra reserva para criar um atributo public
}
 const obj2 = new Obj('2 - new obj')
 const obj3 = new Obj('3 - new obj')
 console.log(obj2.nome)
 console.log(obj3.nome)