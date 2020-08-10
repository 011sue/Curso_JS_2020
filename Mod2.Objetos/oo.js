// CODIGO NÃO EXECUTAVEL


/*
Linguagens não  estruturadas - Go To, codigo não estruturado, 
era ruim para qualidade do codigo

Linguagens estruturadas - 
procedures - funções
paradigmas procedurais, trecho de codigo que você da o nome 
e executa em outro lugar
*/

//função ( dados...)
processamento(valor1, valor2, valor3){

}

// Em OO
// estruturas que geram objetos: classes, funções, depende da liguagem
objeto = {
   valor1, // atributos internos
   valor2,
   valor3,
   processamento() { // comportamento - funções
       //...
   }
}

objeto.processamento() // invocação do obj

/* 
objeto funciona como uma capsula
agrupa comportamentos e atributos

objt pode conter outros objt
objt pode conter uma relação de parentesco - herança
                obj pai - obj filho

abstração - 
pegar um objeto do mundo real e traduzir para dentro do sistema - mapear as ações funcionais

encapsulamento - private , public, protect
ter os detalhes de implementação escondido
mostrar uma interface simples

alto nivel de acoplamento == baixo nivel de encapsulamento
muitos objetos com comportamentos expostos
EXPOR APENAS O NECESSARIO

herança -
reutilização do codigo
recebe atributos e comportamentos de um objt pai
JS permite apenas um objt pai


polimorfismo -
multiplas formas
ex carro - conceito generico
a partir de uma var no conceito generico
e é capaz de atribuir a outras
ex carro : ferrari, celta, palio
*/

/* objeto é uma coleção dinamica de pares chave-valor */

const produto = new Object 
// criar um obj apartir de operador new
// chamando uma função "Object"
// new Object = função construtora
// a partir disto instancia um objt

// por ser dinamico você pode usar
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)

// PARA DELETAR

delete produto.preco
delete produto['marca do produto']


const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Suellen',
        idade: 24,
        endereco: {
            logradouro: 'Rua tenente Azevedo',
            numero: 113,
            complemento: 'AP 05'
        }
    },
    condutores: [{
        nome: 'Bruno',
        idade: 22
    }, {
        nome: 'Gustavo',
        idade: 20
    }, {
        nome: 'Douglas',
        idade: 45
    }],

    calcularValorSeguro: function() {
      //return  1000 / 4
    }
}

carro.proprietario.endereco.numero = 1000
//console.log(carro)

console.log(carro.condutores)