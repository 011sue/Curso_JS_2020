const funcs = []
for (var i = 0; i < 20; i++){
 // 1 declaração da variavel, 2 condição, 3 incremento   
    funcs.push(function() {
console.log(i)
    })
}
funcs[2]() // retorna 20
funcs[8]() // retorna 20
// ERRO JS -sempre apresenta o valor mais alto em todos
// motivo: var não serve para funçao

