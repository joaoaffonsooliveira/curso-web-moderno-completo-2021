function rand({ min = 0, max = 1000 }) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = { max: 50, min: 40}
console.log(rand(obj)) // essa é uma forma de fazer

console.log(rand({ max: 50, min: 40 })) // essa é outra forma de fazer o que fizemos acima

console.log(rand({})) // passando um objeto vazio ele vai adotar o default min = 0 e max = 1000

// console.log(rand()) // gera um erro porque vai destruturar algo que está nulo