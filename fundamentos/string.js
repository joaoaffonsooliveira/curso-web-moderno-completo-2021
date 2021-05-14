const escola = "Cod3r";

console.log(escola.charAt(4)); // r
console.log(escola.charAt(5)) // não printa nada porque não tem índice 5
console.log(escola.charCodeAt(3)); // unicode 51 tabela ASCII
console.log(escola.indexOf(3)); // procura o índice do char 3

console.log(escola.substring(1)); // od3r
console.log(escola.substring(0, 3)); // Cod

console.log('Escola'.concat(escola).concat('!')); // função concatenar
console.log('Escola' + escola + "!"); // concatena
console.log(escola.replace(3, 'e')); // Coder

console.log('Ana, Maria, Pedro, José' .split(",")); // Cria array de nomes