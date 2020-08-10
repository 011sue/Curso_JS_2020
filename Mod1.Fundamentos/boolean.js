let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)
// !! 2x negativo negativo
// ! 1x negativo

console.log('os verdadeiros..')
console.log(!!3)
console.log(!!-2)
console.log(!!' ')
console.log(!!{})
console.log(!![])
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('Os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('para finalizar')
console.log(!!('' || null || 0 || ' ')) // true

let nome = 'Sue'
console.log(nome || 'Desconhecido')
// se houver dado apresentará o dado, senão apresentará desconhecido

// + informações sobre boolean na aba null