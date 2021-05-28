//no node o this é um objeto que aponta para module.exports
console.log(this === global) // false
//no node o this é um objeto que aponta para module.exports
console.log(this === module) // false

console.log(this === module.exports) // true
//o exports aponta para a mesma referência que é o module.exports
console.log(this === exports) // true

function logThis() {
    console.log('Dentro de uma função...')
    //dentro de uma função o this não aponta para exports
    console.log(this === exports) // false
    //dentro de uma função o this não aponta para exports
    console.log(this === module.exports) // false
    //dentro de uma função o this aponta para global e fora da função, ou seja, dentro do module aponta para module.exports
    console.log(this === global) // true
    // tenha cuidado com isso. thi.perigo = '...' por exemplo, aponta para global
}

logThis()