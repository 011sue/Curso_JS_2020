const notas = [2, 3.3, 9, 8, 7.9]

for (i in notas) {
    console.log(i, notas[i])
}
// retorna as notas e o numero do indice delas
console.log('---------')
const pessoa = {
    nome: 'Suellen',
    sobrenome: 'Souza',
    idade: 24,
    peso: 64
}

for(let atributo in pessoa) { // o let faz o indice ficar apenas dentro do escopo
    console.log(`${atributo} = ${pessoa[atributo]}`)
}
//console.log(atributo)// não retorna po conta do let