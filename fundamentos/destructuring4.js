function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor) // arredonda para baixo
}

console.log(rand([50, 40]))
console.log(rand([992])) // min = 992 max = 1000 (default)
console.log(rand([, 10])) // min = 0 max = 10
console.log(rand([])) // min = 0 (default) max = 1000 (default)
// console.log(rand()) // erro, porque tenta destruturar algo que é nulo ou undefined