const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) // object.keys função que acessa todas as chaves
console.log(Object.values(pessoa))  // object.values função que acessa todas os valores
console.log(Object.entries(pessoa)) //  object.entries função que acessa chave e valor mostrando em arrays

Object.entries(pessoa.forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
}))

Object.entries(pessoa).forEach(([chave, valor]) => {    // Forma melhor de escrever o que fizemos acima usando operador destructuring
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {  // forma de adicionar um novo atributo e valor dentro de um objeto
    enumerable: true,  // torna numerável, ou seja enumera quando chamo object.keys
    writable: false,  //funciona como uma espécie de freeze para o atributo criado
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2) // pega os atributos de o1 e o2 e concatena com o primeiro objeto passado (dest)
// o valor de a de dest é sobrescrito pelo valor de a em o2

Object.freeze(obj)
obj.c = 1234
console.log(obj)