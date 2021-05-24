// ANOTAÇÕES DA AULA

/*
Um objeto em JS possui uma referência para o seu protótipo e a partir dessa referência se determina a herança.
objeto.__proto__ é a forma que temos de acessar o protótipo
No exemplo dado pelo professor notamos dois objetos que são referenciados usando [[prototype]]
Obs: [[Prototype]] != prototype
*/

const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.prototype) // retorna undefined porque não possui o atributo prototype
console.log(ferrari.__proto__) // usando .__proto__ eu referencio, procuro o protótipo, ou seja o objeto pai
console.log(ferrari.__proto__ === Object.prototype) /* retorna true porque um objeto criado aponta para 
object.prototype, ou seja, referencia object.prototype que é o objeto de maior nível. */
console.log(volvo.__proto__ === Object.prototype) // também retorna true porque aponta para object.prototype
console.log(Object.prototype.__proto__ === null) /* Retorna true porque não existe protótipo acima de prototype,
ou seja, não consigo acessar um protótipo de object.prototype */

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)