const nome = 'Suellen'
const concatenacao = 'Olá ' + nome + '!'
// une dados porém não permite quebrar linhas

const template = ` 
    Olá
    ${nome}!`
    console.log(concatenacao, template)
// template utilizando `` e ${} permite a quebra de linhas

// expressoes...
console.log(`1 + 1 = ${1 + 1}`)
// não rodou

const up = txt => txt.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)

