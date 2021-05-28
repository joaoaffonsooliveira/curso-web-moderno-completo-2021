const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')() // perceba que o o require do primeiro parênteses é uma função, o segundo é um objeto
const contadorD = require('./instanciaNova')() // perceba que o o require do primeiro parênteses é uma função, o segundo é um objeto

// Perceba que o node faz cache dos módulos
contadorA.inc() // 1 + 1 = 2
contadorA.inc() // 2 + 1 = 3
console.log(contadorA.valor, contadorB.valor) // 3 3

contadorC.inc() // 1 + 1 = 2
contadorC.inc() // 2 + 1 = 3
console.log(contadorC.valor, contadorD.valor) // 3 1
