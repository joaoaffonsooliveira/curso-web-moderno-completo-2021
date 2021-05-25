//map vem de mapear, você mapeia um array para outro do mesmo tamanho, só que com os dados transformados
//internamente tem um for para percorrer
//obs: o maps gera um novo array, mas o array original não é modificado

const nums = [1, 2, 3, 4, 5]

//for com propósito
let resultado = nums.map(function(e) {
    return e * 2
})

console.log(resultado) // [ 2, 4, 6, 8, 10 ]

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`
//parseFloat pega string e transforma em ponto flutuante

resultado = nums.map(soma10).map(triplo).map(paraDinheiro) //map em cima de map porque é array em cima de array
console.log(resultado) // [ 'R$ 33,00', 'R$ 36,00', 'R$ 39,00', 'R$ 42,00', 'R$ 45,00' ]
// retornou strings porque usei template string