// RECURSO 252015

const pessoa = {
    nome: 'Suellen',
    idade: 24,
    cpf:'426.108.708-17',
    end: {
        logradouro: 'T. Azevedo',
        num: 113
    }
}

const { nome, idade, cpf } = pessoa
// {} representa operador de destructuring
 console.log(nome, idade, cpf)

 const { nome: n, idade: i, cpf: id} = pessoa
 // para apelidar a const constante: aplido
 console.log( n, i, id )

 // destructuring
 //criar ou extrair de elementos o que precisa
// sabendo que receberá um objeto dentro de uma função
// uso para tirar os atributos

