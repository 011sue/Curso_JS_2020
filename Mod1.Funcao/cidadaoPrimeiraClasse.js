// FUNÇÃO EM JS É FIRST CLASS OBJECT
// HIGHER ORDER FUNCTION - FUNÇAO DE ALTA ORDEM
// TRABALHAR FUNÇÃO COMO DADO
// se não colocar return - ela retorna undefined

// CRIAR DE FORMA LITERAL

function fun1() {

}

// ARMAZENAR EM UMA VARIAVEL OU CONST

const fun2 = function () {

}

// ARMAZENAR DENTRO DE UM ARRAY

const array = [function (a, b) {return a + b}, fun1, fun2]
console.log(array[0](2,3))

// ARMAZENAR EM UM ATRIBUTO DE OBJ

const obj = {}
obj.falar = function () { return 'opa'}
console.log(obj.falar())

// PASSAR FUNÇÃO COMO PARAMETRO

function run(fun) {
    fun()
}
run(function () { console.log('executando...')})


// UMA FUNÇÃO PODE CHAMAR/CONTER OUTRA FUNÇÃO
function soma (a,b){
    return function (c){
        console.log(a + b + c)
    }
} // a função externa chama a função interna
// que utiliza os dados das duas

soma(2,3)(4) 
// 2 e 3 são a e b
// 4 é c

