// 04) ​Crie uma função que irá receber dois valores, o dividendo e o divisor. 
//A função deverá imprimir o resultado e o resto da divisão destes dois valores. 
// Dividendo é o que será dividido
// divisor é o que irá dividir
// resultado = quociente
// Resto é o que sobra


function divisão(dividendo, divisor, q, r){
    return dividendo/divisor=q
}

console.log(valor(10, 2))

// CORREÇÃO 4

function divisao (dividendo, divisor) {
    console.log("Resultado: " + Math.floor(dividendo/divisor));
    console.log(`Resto: ${dividendo % divisor}`)
}

divisao(11, 4)

/* cria-se uma função chamada divisão passando dois paramentros
ao inves de return usa-se o console

no console1 você realiza a divisão do dividendo pelo dividor, 
utilizando math.floor para arredondar para menos

no console2 você utiliza o mod, para calcular o resto da divisão

*/