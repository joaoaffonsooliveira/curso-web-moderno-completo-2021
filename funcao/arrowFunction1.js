// Arrow function foi criada com 2 propósitos principais
// 1) ser mais enxuta
// 2) ter um this que não varia. O this permanece o mesmo no contexto léxico no qual foi criado.

let dobro = function (a) {
    return 2 * a
}

// A função arrow é sempre anônima, ou seja, para ser chamada é armazenada dentro de uma variável.
dobro = (a) => {
    return 2 * a 
}

dobro = a => 2 * a // return implícito, se colocar bloco {} precisamos colocar o return
console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' // possui um param
console.log(ola())