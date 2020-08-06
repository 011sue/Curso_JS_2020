// função callback 
// passar uma função para outra função e quando determinado evento acontecer, essa função sera chamada de volta

// FABRICANTES DE CARROS
// cria um array
fabricantes = ["MERCEDES", "BMW", "AUDI", "WV", "FIAT"]

function imprimir (nome, indice) { // função chamada nome recebe nome indice
    console.log(`${indice + 1}, ${nome}`) 
    // template - indice +1 para começar a contagem do array do 1, e acrescentar o nome
}

fabricantes.forEach(imprimir)
// pra cada elemento que ele encontrar dentro do array ele vai chamar a função
// retorna n. + fabricante
fabricantes.forEach(fabricante => console.log(fabricante))
// retorna apenas os fabricantes


//RETORNAR NOTAS
const notas = [1.9, 2.6, 3, 4.3, 5.5, 6, 7, 2.8, 3.9, 10]

// sem callback
let notasBaixas = []
for (let i in notas){
    if (notas[i] < 5 ) {
        notasBaixas.push(notas[i]) // PUSH ADICIONA ELEMENTO NO ARRAY
    }
}
console.log(notasBaixas)

//com callback


// filter - função que vai filtrar os elementos do array dentro de determinados critérios
// se retornar true retorna false nao retorna
const notasBaixas2 = notas.filter(function (nota) {
    return nota < 5
})

console.log(notasBaixas2)

// com callback e arrow

const notasBaixas3 = notas.filter(nota => nota <5)
console.log('call + arrow', notasBaixas3)

// CALLBACK 3

// EX DE CALLBACK NO BROWSER

//  getElementsByTagName - função que acessa os elementos atraves de uma tag
//'body'[0] mesmo que só exista 1 é preciso nomear
//onclick ativar quando clicar
//(e), representa evento
document.getElementsByTagName('body')[0].onclick = function (e){
    console.log('O evento ocorreu!')
}

