// Criando obj com const
//  a const "Pessoa" não pode ser alterada
// os atributos dentro da Pessoa pode ser alterado sim

//pessoa -> 123 (...)
const pessoa = { nome: 'Joao' }
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> (...)
// incorreto porque não se pode atribuir novamente ao nome pessoa

//pessoa = { nome: 'Ana'}

Object.freeze(pessoa)
// congelar obj pessoa
// não consegue mais mexer no obj
// caso eu queira atribuir outro nome, o programa vai ignorar
// ou seja a ação a seguir não return erro mas nao altera
// não consegue excluir, atribuir ou alterar
pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete. pessoa.nome

const pessoaConst = Object.freeze({ nome: 'Suellen'})
// não consegue alterar NADAAAA

