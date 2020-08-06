const funcs = []
for (let i = 0; i < 20; i++){
 // 1 declaração da variavel, 2 condição, 3 incremento   
    funcs.push(function() {
console.log(i)
    })
}
funcs[2]() // retorna 2
funcs[8]() // retorna 8
// Let funciona em função