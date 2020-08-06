let contador = 1
while(contador <= 10){
    console.log(`contador = ${contador}`)
    contador++
}
// contador ++ faz a contagem de 1 até as 10, quando chega em 11 encerra

for(let i = 1; i <= 10; i++) {
    console.log(` i = ${i}`)
}

const notas = [6.7, 8.1, 1, 2.9, 9] // array usa []
for (let i = 0; i < notas.length; i++) {
    //comece do 0, va até o i< tamanho do array, e acresc 1 unidade ao tamanho de i
    console.log(`nota = ${notas[i]}`)  
}