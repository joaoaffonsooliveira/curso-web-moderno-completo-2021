const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]);
console.log(valores[4]); // undefined

valores[4] = 10; //adiciona o número 10 na posição 4
console.log(valores);
console.log(valores.length);

valores.push({id: 3}, false, null, 'texto'); // Adiciona ao final do array esses valores.
console.log(valores);

/*
Obs: Apesar do Array admitir dados heterogêneos. Tenha como boa prática não misturar dados diferentes.
exemplo: array de objetos, array de arrays, array de números, array de textos, array de clientes etc.
*/

console.log(valores.pop()); // Retira o último elemento de um array
delete(valores[0]); // Retira o elemento de índice 0 do array.
console.log(valores);

console.log(typeof valores); // Objeto