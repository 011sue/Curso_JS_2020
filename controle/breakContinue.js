// BREAK E CONTINUE DEVEM SER EVITADOS
// ELES CAUSAM DESVIO DE FLUXO
// BREAK INFLUENCIA NA SAIDA DO SWITCH, E DENTRO DE UM LAÇO FOR E WHILE
// PREFERIR OUTRAS ESTRUTURAS

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in num){// x é o indice
    if (x == 5) 
    break // se x for = 5 ele irá parar
    console.log(`x= ${num[x]}`)
} 
console.log('-------------')

for (y in num) {
    if(y == 5)
        continue
    console.log(`${y} = ${num[y]}`)
}
// continue dif break
// continue interrompe a repetição atual e pula para a prox
// no caso pulou de 5 para 7

externo: //atribuição de rotulo associado ao for
for (a in num) {
    for (b in num) {
        if(a ==2 && b ==3)break externo
        console.log(`Par = ${a}, ${b}`) 
        // irá parar quando chegar em 2,2
    }
}
console.log('---CODIGO EM DESUSO---')