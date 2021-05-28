// Arrow Function
const soma = (a, b) => a + b // toda arrow function é anônima que podemos atribuir a uma variável
// se houver apenas um parâmetro podemos omitir ()
// se houver corpo de função {} necessitamos colocar o return. No exemplo acima temos return implícito
console.log(soma(2, 3)) 

// Arrow Function (this)
const lexico1 = () => console.log(this === exports) // no Node this assume valor de objeto exports
const lexico2 = lexico1.bind({}) // Nesse caso não conseguimos forçar com o bind
lexico1() // true
lexico2() // true

// parametro default
function log(texto = 'Node') {
    console.log(texto)
}

log()
log('Sou mais forte')

// operador rest
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2, 3, 4, 5))