// aprendendo a usa FOR / IN

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for (let i in notas) {
    console.log('index =',i , "nota =", notas[i])
}

// console.log(i) // colocamos um let dentro do FOR / IN para que o i seja acessível apenas dentro da estrutura de repetição

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}

// console.log(atributo) // colocamos um let dentro do FOR / IN para que o atributo seja acessível apenas dentro da estrutura de repetição