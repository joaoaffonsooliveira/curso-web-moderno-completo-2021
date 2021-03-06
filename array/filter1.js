/* Quando quiser criar um novo array com os valores mudados usar o map. 
Quando quiser apenas filtrar usar o filter*/
const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

console.log(produtos.filter(function(p) {
    return false // todos os elementos são filtrados, nenhum deles passa, logo retorna []
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil)) 
/* cria um array, que aparece somente preços acima de 500
e ao mesmo tempo que tenha fragil como true */

/* 
{ nome: 'Notebook', preco: 2499, fragil: true }
{ nome: 'iPad Pro', preco: 4199, fragil: true } 
*/