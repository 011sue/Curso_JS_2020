{
    {
        {
            { var sera = 'Será???'}
        }
    }
} 
// os blocos de codigos não fazem diferença
// desde que não seja uma função - linha 20

console.log(sera)

// escopos - locais onde as variaveis são visiveis public/private

function teste() {
    var local = 123
    //console.log(local) visivel
}
teste()
console.log(local) // não visivel

/* por que evitar criar variaveis que vão para o escopo global?
porque quando você cria uma variavel e ela vai para o escopo global,
existe a vantagem de poder acessa-la de qualquer lugar do seu sistema
porém qualquer sobrescrita pode gerar um problema BUG

var global - visivel para todos
var escopo função - visivel apenas dentro da function */


