const nome = 'Rebeca';
const concatenacao = 'Olá' + ' ' + nome + '!';
const template = `
    Olá
    ${nome}!`

console.log(concatenacao, template);
/* 
Olá Rebeca!
Olá
Rebeca!
*/

// expressões...
console.log(`1 + 1 = ${1 + 1}`); // 1 + 1 = 2

const up = texto => texto.toUpperCase(); // usando função junto com template string
console.log(`Ei... ${up(`cuidado`)}`);