// aula sobre operadores relacionais

console.log('01)', '1' == 1) //  true porque comparo o valor 1 = 1 e não o tipo
console.log('02)', '1' === 1) // false porque comparo o tipo number e string são diferentes
console.log('03)', '3' != 3) // false porque em valor eles são iguais
console.log('04)', '3' !== 3) // true porque string é diferente de number

console.log('05)', 3 < 2) // false
console.log('06)', 3 > 2) // true
console.log('07)', 3 <= 2) // false
console.log('08)', 3 >= 2) // true

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 === d2) // false porque compara a referência de memoria
console.log('10)', d1 == d2) // false porque os valores são diferentes
console.log('11)', d1.getTime() === d2.getTime()) // true porque compara dois numbers (mesmos tipos)
console.log('11)', d1.getTime() == d2.getTime()) // true porque o valor é o mesmo (mesma hora em d1 e d2)
console.log('12)', undefined == null) // true
console.log('12)', undefined === null) // false

// dica, é melhor usar sempre o estritamente igual por via das dúvidas
