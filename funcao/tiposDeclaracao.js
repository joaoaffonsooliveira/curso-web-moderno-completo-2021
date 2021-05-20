/* Mesmo na linha um já consigo chamar uma função do tipo "function declaration"
porque o javascript carrega primeiro todas as funções desse tipo. O mesmo não ocorre com a "function
expression" e nem com a "named function expression". Ambas precisam ser chamadas após sua declaração */
console.log(soma(3, 4))

// function declaration
function soma(x, y) {
    return x + y
}

// function expression
const sub = function (x, y) {
    return x - y
}
console.log(sub(3, 4)) // function expression chamada depois de declarada

// named function expression
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(3, 4)) // named function expression chamada depois de declarada