// let possui escopo de bloco
var numero = 1
{
    let numero = 2
    console.log('Dentro =', numero)
}

console.log('Fora =', numero) // como os escopos são diferentes numero é printado com valores diferentes

let numero2 = 3
{
    let numero2 = 4
    console.log('Dentro =', numero2)
}

console.log('Fora =', numero2) 
// let possui aqui dois escopos. O console vai atrás do escopo mais retrito primeiro e depois o global

// var possui escopo global e escopo de função
// let possui escopo global, de função e de bloco