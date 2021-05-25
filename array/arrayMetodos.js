/* atribuir uma constante ao meu array significa que não posso atribuir algo a mais nessa variável. 
O conteúdo dentro do array, por outro lado, pode ser modificado, retirado, adicionado etc. */

const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
console.log(pilotos) // [ 'Vettel', 'Alonso', 'Raikkonen', 'Massa' ]

pilotos.pop() // 'massa' sai da lista de pilotos, pop remove último elemento da lista.
console.log(pilotos) // [ 'Vettel', 'Alonso', 'Raikkonen' ]

pilotos.push('Verstappen') // adiciona como último elemento da lista.
console.log(pilotos) // [ 'Vettel', 'Alonso', 'Raikkonen', 'Verstappen' ]

pilotos.shift() // remove o primeiro elemento de um array
console.log(pilotos) // [ 'Alonso', 'Raikkonen', 'Verstappen' ]

pilotos.unshift('Hamilton') // adiciona no primeiro elemento de um array
console.log(pilotos) // [ 'Hamilton', 'Alonso', 'Raikkonen', 'Verstappen' ]

// O método splice() pode adicionar e remover elementos de um array

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa') // primeiro índice, segundo quantidade de elementos que serão removidos
console.log(pilotos) // [ 'Hamilton', 'Alonso', 'Bottas', 'Massa', 'Raikkonen', 'Verstappen' ]

// remover
pilotos.splice(3, 1) // índice 3, remove apenas 1 elemento
console.log(pilotos) // [ 'Hamilton', 'Alonso', 'Bottas', 'Raikkonen', 'Verstappen' ]

// método slice() gera um novo array a partir do array antigo
const algunsPilotos1 = pilotos.slice(2) // novo array gerado a partir do índice 2 do último array
console.log(algunsPilotos1) // [ 'Bottas', 'Raikkonen', 'Verstappen' ]

const algunsPilotos2 = pilotos.slice(1, 4) // novo array de índice 1 ao 3 (valor do índice 4 não entra)
console.log(algunsPilotos2) // [ 'Alonso', 'Bottas', 'Raikkonen' ]