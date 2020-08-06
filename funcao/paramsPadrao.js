// ANTES E DEPOIS DA VERSÃO 2015

// ESYTRATEGIA 1 PARA GERAR VALOR PADRÃO
// UTILIZANDO OPERADOR OU

function soma1(a, b, c) {
    a = a || 1 // a recebe a ou valor 1
    b = b || 1
    c = c || 1
    return a + b + c
}
console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0))
              // 3      // 5       //6             // nao rt

// estrategia 2, 3, e 4 ára gerar valor padrão
function soma2(a, b, c) {
    a = a !== undefined ? a : 1
    // se A for diferente de undefined recebe o valor de a
    // se for undefined assume valor 1
    b = 1 in arguments ? b : 1/* se fosse A seria 0, se fosse C seria 3 */
    // dentro de arg existe o indice 1, se existir pegue o valor de b, senão pegue o valor 1
    c = isNaN(c) ? 1 : c// mais segura
    // se variavel c é um NaN assuma o valor 1, se houver num, mantenha-o
    return a + b + c // NUNCA ESQUECER O RETURN
}
console.log(soma2(), soma2(3), soma2(1, 2,3), soma2(0, 0, 0))// 3
console.log(soma2(3)) // 5
console.log(soma2(1, 2, 3)) //6
console.log(soma2(0, 0, 0)) // 0

// VALOR PADRÃO ES2015 - NOVA VERSÃO
function soma3( a =1, b =1, c = 1){
    return (a + b + c)
}
console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))