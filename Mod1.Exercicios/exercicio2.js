// 02)​ Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:  Equilátero: Os três lados são iguais. Isósceles:  Dois lados iguais. Escaleno: Todos os lados são diferentes. 
// Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um triângulo). 

const triangulo = function (a * b * c){

    if (triangulo( a == b == c)){
    console.log('isoceles')
    }else
    console.log('normal')

}

triangulo(2, 2, 2)

// CORREÇÃO 2

function classificaTriangulo (lado1, lado2, lado3) {
    if(lado1 == lado2 && lado2 == lado3){
        return 'Equilátero'
    } else if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3) {
        return 'Isósceles'        
    }else { 
        return 'Escaleno'
    }
}

console.log(classificaTriangulo(2, 2, 2));
console.log(classificaTriangulo(2, 3, 3));
console.log(classificaTriangulo(2, 3, 4));

// a logica estava certa, utiliza-se o If, IfElse e Else.
/* cria-se uma função nomeada e com tres parametros

no if compara-se p1 == p2 && p2 == p3 se true retorna Equilatero (tres lados iguais)
no if else compara-se p1 == p2 || p2 == p3 || p1 == p3 se retornar um false retorna Isosceles ( um lado diferente, 2 iguais)
no else não existe comparação, pois caso p1, p2, p3 sejam totalmente diferentes, retorna Escaleno
*/
