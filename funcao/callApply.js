// Call e Apply são outras formas de chamar uma função. Call e Aplly são funções também

function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco()) // Aqui chamamos a função diretamente
console.log(produto.getPreco()) // Aqui chamamos a função por meio de um objeto

const carro = { preco: 49990, desc: 0.20 }

console.log(getPreco.call(carro)) // Aqui chamamos a função pelo call
console.log(getPreco.apply(carro)) // Aqui chamamos a função pelo apply

// A diferença entre o call e o apply está na forma como passamos os parâmetros
console.log(getPreco.call(carro, 0.17, '$')) 
console.log(getPreco.apply(global, [0.17, '$'])) // na apply os parâmetros são passados por meio de um array