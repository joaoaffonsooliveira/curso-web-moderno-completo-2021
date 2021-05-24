function MeuObjeto() {}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto // instanciei objeto a partir de uma função construtora
const obj2 = new MeuObjeto // instanciei outro objeto a partir da mesma função construtora
console.log(obj1.__proto__ === obj2.__proto__) /* true porque os dois objetos apontam para o mesmo protótipo
que nesse caso foi a função construtora */
console.log(MeuObjeto.prototype === obj1.__proto__) /* true. o protótipo do meu objeto aponta para o protótipo
da função construtora, que não é o object.prototype e sim MeuObjeto.prototype, ou seja o
atributo prototype da função construtora */

MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia! Meu nome é ${this.nome}!`)
}

obj1.falar() /* Obj1 recebe nome do protótipo pai porque adicionamos nome nos códigos acima*/

obj2.nome = 'Rafael'
obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype
obj3.nome = 'Obj3'
obj3.falar()

// Resumindo a loucura...
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null) // nulo porque o object.prototype é o nível máximo