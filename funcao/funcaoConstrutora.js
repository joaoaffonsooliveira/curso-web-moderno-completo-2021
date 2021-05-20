/* A função construtora ela funciona como se fosse uma classe. Ou seja, é um molde para
a construção de "objetos" */

function Carro(velocidadeMaxima = 200, delta = 5) {
    // atributo privado
    let velocidadeAtual = 0

    // metodo publico
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    // metodo publico
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar() // 0 + 20 = 20
ferrari.acelerar() // 20 + 20 = 40
ferrari.acelerar() // 40 + 20 = 60
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro) // function --> A função construtora é uma função 
console.log(typeof ferrari) // object --> objeto instanciado pela função construtora