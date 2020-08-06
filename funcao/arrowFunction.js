let comparaComThis = function (param) {
    console.log(this === param)
}
comparaComThis(global) // true -- colocando no escopo global
// this pe estritamente igual obj global


const obj = {} // cria obj
comparaComThis = comparaComThis.bind(obj) // inclui o bind
comparaComThis(global) // false
comparaComThis(obj) // true
// porque o bind trata apenas a função atual

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)//false --aponta para onde a função foi definida
comparaComThisArrow(module.exports) // true -- 
//module.exports????


// This na funcão arrow é um this associado a função que foi escrita
// não tem variação mesmo com bind
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)//false arrowfunction é mais forte que bind
comparaComThisArrow(module.exports) // true aponta para obj