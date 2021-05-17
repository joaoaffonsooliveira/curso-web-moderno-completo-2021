const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado' // Operador ternário é o que possui 3 operandos
// se nota >= 7 retorna aprovado, senão reprovado
// <Expressão de verdadeiro ou falso> ? <Opção_true> : <opção_false>

console.log(resultado(7.1))
console.log(resultado(6.7))