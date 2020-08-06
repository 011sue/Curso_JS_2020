var numero = 1
{
    let numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)

/* 
*   let fica visivel apenas dentro do bloco
*   como eles estão em escopos diferentes
*   os valores podem coexistir
*   var global e função
*   let global, função e bloco
*/