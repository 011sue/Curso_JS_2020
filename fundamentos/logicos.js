function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2 // t1 ou t2
    const comprarTV50 = trabalho1 && trabalho2 // t1 e o t2 - ambos forem verdadeiros
    const comprarTV32 = !!(trabalho1 ^ trabalho2)
    // !! para converter para booleano
    // ^ ou exclusivo bit a bit bitwise xor
    // const comprarTV32 = trabalho1 != trabalho2
    // comprartv32 é a mesma coisa que se t1 for diferente de t2
    const manterSaudavel = !comprarSorvete
    // manter saudavel é a negação logica de comprar sorvete
    return { comprarSorvete, comprarTV50, comprarTV32, manterSaudavel}
    //coloca direto o valor que automaticamente ele já vai criar a chave valor
    //forma reduzida recurso JS2015
}
console.log(compras(true, true)) // T T F F
console.log(compras(true, false)) // T F T F
console.log(compras(false, true)) // T F T F
console.log(compras(false, false)) // F F F T

