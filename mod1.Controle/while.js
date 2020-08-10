function getInteiroAleatorioEntre(max, min) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
} // floor para menos

let opcao = 0
// enquanto a expressão for verdadeira
// continue executando o laço até ficar falsa
while (opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1, 10)
        console.log(`Opção escolhida foi ${opcao}.`)

}
console.log('Até mais!!!')