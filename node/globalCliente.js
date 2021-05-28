require('./global')

console.log(MinhaApp.saudacao()) // Estou em todos os lugares

MinhaApp.nome = 'Eita!' // Como usamos o object.freeze não conseguimos fazer essa mudança
console.log(MinhaApp.nome) // Sistema legal