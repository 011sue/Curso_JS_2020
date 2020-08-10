function area(largura,  altura) {
    const area = largura * altura
    if (area > 20) {
    console.log(`valor acima do permitido ${area}m2.`)
    } else {
        return area
    }
}

console.log(area(2, 2)) // utiliza os 2
console.log(area(2)) // segundo valor sera undefined - return NaN
console.log(area()) // retorna NaN
console.log(area(2, 4, 6, 8)) // usa só os 2 primeiros parametros
// não apresenta erro
console.log(area(5, 5))// 5x5 retorna acima do permitido