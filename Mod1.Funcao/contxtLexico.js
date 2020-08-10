const valor = 'String'

function minhaFuncao() {
    console.log(valor)
    
}

function exec() {
    const valor = 'Numeral'
    minhaFuncao()
}

exec()
// retorna string 
// a function busca dentro do escopo que ela foi definida
// não no local de execução

