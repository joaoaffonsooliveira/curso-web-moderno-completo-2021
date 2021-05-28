// Passando parâmetros usando o require de outro arquivo
const saudacoes = require('./passandoParametros')('Ana', 'Lucas', 'João')
console.log(saudacoes) // [ 'Boa semana Ana!', 'Boa semana Lucas!', 'Boa semana João!' ]