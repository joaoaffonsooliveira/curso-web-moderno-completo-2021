/* O JSON é o mais utilizado no mercado para fazer a comunicação entre sistemas de tecnologias
totalmente diferentes. É um formato textual que consegue ser lido em qualquer linguagem praticamente */

const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } }
console.log(JSON.stringify(obj)) /* No JSON não conseguimos passar funções, apenas dados de outros tipos
porque o JSON é um arquivo de texto, feito essencialmente para passagem de dados entre sistemas feitos com
tecnologias diferentes */

// console.log(JSON.parse("{ a: 1, b: 2, c: 3 }")) --> o formato JSON não é esse
// console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }")) --> o formato JSON não é esse
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }')) /* Agora sim escrevemos um JSON. todos os atributos de um JSON
precisam estar entre aspas duplas. A função JSON.parse transforma o JSON em objeto. */
console.log(JSON.parse('{ "a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }')) /* Aqui também temos um JSON
e recebe todos os tipos uma string precisa ter aspas duplas. Uma stringo como no exemplo abaixo não funcionaria */

// console.log(JSON.parse('{ "a": 1.7, "b": \'string\', "c": true, "d": {}, "e": [] }'))