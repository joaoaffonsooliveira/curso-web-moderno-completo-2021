let valor // Variável não inicializada
console.log(valor) // Undefined

// console.log(valor2)  // Not defined

valor = null // Variável inicializada, porém possui valor nulo, ou seja, não possui valor na memória
console.log(valor) // uso o null quando quero zerar o valor de uma variável
// console.log(valor.toString()) // Erro!

const produto = {}
console.log(produto.preco) // Undefined
// console.log(produto.preco.a) // Erro!
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined! use null ou 0
console.log(!!produto.preco)
// delete produto.preco // retirar um atributo
console.log(produto)

produto.preco = null // Sem preço
console.log(!!produto.preco)
console.log(produto)


