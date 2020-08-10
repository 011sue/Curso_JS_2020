// Tratamento de erro
// Try - Tentar - bloco de codigo para tratativa de erro
// catch - associar ao try - uma vez que gerado um erro dentro de try o catch faz a tratativa
// throw - retorno do erro - lançar
/* throw new Error ('...')
*  throw 10 - retorna numero
*  throw true - retorna booleano
*  throw 'mensagem' - retorna string
* throw {    - retorna obj
    nome: errp.name,
    msg: erro.message,
    date: new Date
*/
// finally - bloco que é executado ocorrendo erro ou não

function tratarErroELancar(erro) {
    throw new Error ('Identificado erro')
}

function imprimirNomeGritando(obj) {
    try {
    console.log(obj.nome.toUpperCase() + '!!!')
//chama obj defiinindo como nome em transformando em letras maiusc
    } catch (e){ 
        tratarErroELancar(e)
// tratar o erro mostrar msg pro user
        } finally {
            console.log('Finalizado')
        }
}

const obj = { nome: 'Suellen'}
imprimirNomeGritando(obj)