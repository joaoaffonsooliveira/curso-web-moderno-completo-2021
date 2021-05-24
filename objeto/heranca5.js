console.log(typeof String) // function
console.log(typeof Array) // function
console.log(typeof Object) // function
/* Ou seja, string, array e object possuem um atributo chamado .prototype */

String.prototype.reverse = function () {
    return this.split('').reverse().join('') // acessamos usando this
}

console.log('Escola Cod3r'.reverse()) // literal do tipo string

Array.prototype.first = function() {
    return this[0]
}

console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c'].first())

String.prototype.toString = function () {  // Não faça isso! não substitua comportamentos que já existem
    return 'Lascou tudo'
}

console.log('Escola Cod3r'.reverse())