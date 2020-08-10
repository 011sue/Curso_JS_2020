// PAR NOME VALOR

const identificador = 'valor da const externo' // contxt léxico 1
// contexto léxico = local no qual sua var foi definida no code

function exec() {
    const identificador = 'valor da const interno' // contxt lexico 2
    return identificador
}

// lex 1 e 2 estão em contxt diferentes não gera conflito
// objetos são grupos alinhados de pares nome/valor
const cliente = {
    nome:'Suellen',
    idade: 24,
    peso: 64,
    endereco: {
        logadouro: 'T. Azevedo',
        num: 113
    }
}
console.log(identificador) // ret. lex 1
console.log(exec()) // ret. lex 2
console.log(cliente) // ret. cliente
