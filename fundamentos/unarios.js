let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1 // a forma pré fixada --variavel possui uma prioridade maior que a forma pós fixada
console.log(num1)

console.log(++num1 === num2--) //retorna true porque no momento da comparação num2 vale 2
console.log(num1 === num2) // agora vemos que é false porque num1 = 2 e num2 = 1

// Dica: deixe seu código o mais simples possível. Por incrível que pareça, escrever código simples é difícil