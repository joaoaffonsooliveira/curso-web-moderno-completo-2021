// ES8: Object.values/Object.entries
const obj = { a: 1, b: 2, c: 3 }
console.log(Object.keys(obj)) // [ 'a', 'b', 'c' ]
console.log(Object.values(obj)) // [ 1, 2, 3 ]
console.log(Object.entries(obj)) // [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]


// Melhorias na Notação Literal
const nome = 'Carla'
const pessoa = {
    // nome: nome
    nome, // forma melhorada de escrever
    // forma melhorada de escrever função
    ola() {
       return 'Oi gente!' 
    }
    /* antigamente escreveríamos assim:
    ola: function {
        return 'Oi gente!'
     }
    */
}

console.log(pessoa.nome, pessoa.ola())

// Class. Uso de classes no JS
class Animal {}
class Cachorro extends Animal {
    falar() {
        return 'Au au!'
    }
}

console.log(new Cachorro().falar())