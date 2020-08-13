// uma sequencia não retorna a um numero menor,
// ou seja, se ela já tiver em 10, não pode contar a partir de 9 novamente


// Vantagem do get set é a validação
/* Por convenção utiliza-se o _ antes do nome da variavel 
para indicar que existe o intuito de torna-lo um item privado
 */
// JS não suporta sobre carga de metodo além do get set


const sequencia = {
    _valor: 1, // convenção
    get valor () { return this._valor++ },
    set valor (valor) { 
        // validação
        if (valor > this._valor){
            this.valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)