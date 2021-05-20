// pessoa aponta para -> endereço de memória 123 -> que contém objeto criado{...}
const pessoa = { nome: 'Joao' }
pessoa.nome = 'Pedro' // os dados que estão dentro da variável pessoa podem ser alterados
console.log(pessoa)
// o que não pode acontecer é tentar atribuir outro objeto para a mesma constante como é o exemplo abaixo

// pessoa aponta para -> endereço de memória 456 -> que contém objeto criado{...}
// pessoa = { nome: 'Ana' } // erro porque pessoa é constante

Object.freeze(pessoa) // congelando o objeto pessoa (não consegue mais mexer no objeto)

pessoa.nome = 'Maria' // depois do freeze não consigo mais mudar nome
pessoa.end = 'Rua ABC' // depois de freeze não consigo adicionar mais nada
delete pessoa.nome // também não consigo deletar devido ao freeze

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'Joao' })
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)