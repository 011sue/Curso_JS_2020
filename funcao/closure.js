// escopo criado quando uma função é declarada
// esse escopo permite a função acessar e manipular variaveis externas á função

// contxt lexico em ação


const valor = 'Externo'

function fora() {
    const valor = 'Interno'
    function dentro() {
        return valor
    }
    return dentro
}

const decisao = fora() 
console.log(decisao())

// decisão acessa a const de onde foi definida 
// no caso function fora => valor interno

