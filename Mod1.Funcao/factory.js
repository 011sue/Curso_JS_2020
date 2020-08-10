// cria uma função e retorna um objeto
// com valores fixos ou com parametros
// factory simples é uma função que retorna um novo obj

function criarPessoa() {
    return{
    nome: 'João',
    sobrenome: 'Vicente'
    }
}
console.log(criarPessoa())


/* MINHA TENTATIVA
function criarProduto (){
    return{
        produto: 'Matizador',
        valor: 65
    }
    desconto: 0.1
}

console.log(criarProduto())*/

// EXPLICAÇÃO DO CURSO

function criarProdt(nome, preco) {
    return { // o return faz com que a função rt um obj
        nome, // não precisa colocar 'nome :nome do produto'
        preco, // motivo: já esta sendo passado em parametros
        desconto: 0.1 // 10%

    }
}

console.log(criarProdt('NOTBOOK', 2199.99))
console.log(criarProdt('CELULAR', 599.99))
console.log(criarProdt('IMPRESSORA', 199.99))
console.log(criarProdt('TECLADO', 299.99))

// DESSA FORMA CONSIGO CRIAR VARIOS PRODUTOS
// POUPANDO MAIS TEMPO