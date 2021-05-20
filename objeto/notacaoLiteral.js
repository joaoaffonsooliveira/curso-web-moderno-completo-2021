// Aqui vemos algumas melhorias na notação literal de objeto em ES2015
const a = 1
const b = 2
const c = 3

const obj1 = { a: a, b: b, c: c } // essa duplicidade não é mais necessária.
const obj2 = { a, b, c } // a duplicidade não é mais necessária com essa melhoria.
console.log(obj1, obj2)

const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

const obj4 = {[nomeAttr]: valorAttr} // na versão nova posso fazer o que fiz acima dessa forma
console.log(obj4)

const obj5 = {
    funcao1: function() {   // Antigamente definiamos função em um objeto literal dessa forma
        // ...
    },
    funcao2() {   // Hoje podemos fazer assim, de forma mais enxuta, tirou a palavra function e os dois pontos
        // ...
    }
}
console.log(obj5)