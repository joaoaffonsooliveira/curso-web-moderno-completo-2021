console.log('a =', a)
var a = 2
console.log('a =', a)

/*
*var a = 2
*console.log('a =', a)
*a = 2
*console.log('a =', a)
*/

function teste() {
    console.log('a =', a)
    var a = 2
    console.log('a =', a)
}

teste()
// console.log('a =', a) // erro!

//O efeito de içamento (hoisting) não acontece com variáveis do tipo let

/*
console.log('b =', b)
let b = 3
console.log('b =', b)
*/