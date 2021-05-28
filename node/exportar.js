console.log(module.exports) // {}
console.log(module.exports === this) // true
console.log(module.exports === exports) // true

this.a = 1
exports.b = 2
module.exports.c = 3

// não importa atribuir valores p/ exports porque o que é exportado é module.exports
exports = null
console.log(module.exports) // { a: 1, b: 2, c: 3 }

// não importa atribuir valores p/ exports porque o que é exportado é module.exports
exports = {
    nome: 'Teste'
}
console.log(module.exports) // { a: 1, b: 2, c: 3 }

module.exports = { publico: true}