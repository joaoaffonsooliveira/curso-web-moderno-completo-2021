const moduloA = require('./moduloA')
const moduloB = require('./moduloB')

console.log(moduloA.ola) // Fala Pessoal
console.log(moduloA.bemVindo) // Bem vindo ao node!
console.log(moduloA.ateLogo) // Até próximo exemplo
console.log(moduloA) // retorna o objeto { ola: 'Fala Pessoal', bemVindo: 'Bem vindo ao node!', ateLogo: 'Até próximo exemplo' }

console.log(moduloB.bomDia) // Bom dia
console.log(moduloB.boaNoite()) // Boa noite
console.log(moduloB) // retorna objeto { bomDia: 'Bom dia', boaNoite: [Function: boaNoite] }