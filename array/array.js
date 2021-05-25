/* O array internamente na verdade é um objeto no JavaScript. Não existe o tipo de dado nativo array em JavaScript.
O array é uma estrutua heterogênea. Entretanto, não é interessante misturar diferentes tipos dentro de um array.
É melhor criar cada array um único tipo. Ex: Array de clientes, Array de booleans, array de inteiros etc. */

console.log(typeof Array, typeof new Array, typeof []) // function, objeto, objeto

let aprovados = new Array('Bia', 'Carlos', 'Ana') // não é a forma mais adequada de criar um array
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0]) // Bia
console.log(aprovados[1]) // Carlos
console.log(aprovados[2]) // Ana
console.log(aprovados[3]) // undefined porque ainda não foi adicionado

aprovados[3] = 'Paulo' // adiciona Paulo // Essa notação é recomendada p/ mudar um valor no array
console.log(aprovados[3])
aprovados.push('Abia') // Essa notação é mais recomendada para adicionar algo no array
console.log(aprovados.length) // 5

aprovados[9] = 'Rafael' // adiciona Rafael no array no index 9
console.log(aprovados.length) // 10
console.log(aprovados[8] === undefined) // true
console.log(aprovados) // [ 'Bia', 'Carlos', 'Ana', 'Paulo', 'Abia', <4 empty items>, 'Rafael' ]

aprovados.sort() // ordenou o array, nesse caso, em ordem alfabética
console.log(aprovados) // [ 'Abia', 'Ana', 'Bia', 'Carlos', 'Paulo', 'Rafael', <4 empty items> ]

delete aprovados[1] // deleta Ana
console.log(aprovados[1]) // undefined porque foi deletado. O array não reordena o índice!
console.log(aprovados) // [ 'Abia', <1 empty item>, 'Bia', 'Carlos', 'Paulo', 'Rafael', <4 empty items> ]

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2, 'Elemento1', 'Elemento2') // exclui valores nos índices 1 e 2 e adiciona Elemento1 e elemento2
console.log(aprovados) // [ 'Bia', 'Elemento1', 'Elemento2' ]
aprovados.splice(1, 0, 'Elemento1', 'Elemento2') /* não exclui nenhum. Adiciona elemento1 e elemento2 ao índice 1 */
console.log(aprovados) // [ 'Bia', 'Elemento1', 'Elemento2', 'Elemento1', 'Elemento2' ]
// O splice é um método muito versátil