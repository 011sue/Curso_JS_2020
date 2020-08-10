// 03)​ Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.  
 
function estranha (a, b){
    return a*b (a*b)
}
console.log(estranha(10, 15))

// CORREÇÃO 3

function expoente (base, expoente) {
    //Podemos fazer de 2 modos
    //Método antigo:
    //let resultado = Math.pow(base, expoente)
    //Método novo:
    resultado = base ** expoente

    return resultado
}

console.log(expoente(2, 3))