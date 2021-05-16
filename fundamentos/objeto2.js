console.log(typeof Object) //function
console.log(typeof new Object) //object

const Cliente = function() {}
console.log(typeof Cliente) //function
console.log(typeof new Cliente) //object

class Produto {} //ES 2015 (ES6)  // A classe internamente é na verdade uma função
console.log(typeof Produto) //function
console.log(typeof new Produto()) //object