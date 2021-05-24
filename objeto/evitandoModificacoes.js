/*Object.preventExtensions --> não vai permitir que você adicione novos atributos ao objeto. Você até pode excluir
, mas não pode adicionar. */
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto)) // False, diz que não é um objeto extensível

produto.nome = 'Borracha' // consigo mudar produto.nome
produto.descricao = 'Borracha escolar branca' // não consigo adicionar
delete produto.tag // consigo deletar
console.log(produto) /* Consigo mudar o valor de produto.nome, não consigo adicionar produto.descricao, 
consigo excluir produto.tag */

/* Object.seal  --> seal quer dizer selar --> não consegue add atributo, não consegue excluir atributos, 
mas consegue modificar os valores dos atributos */
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa)) // true, o objeto está selado

pessoa.sobrenome = 'Silva' // não consegue adicionar atributo
delete pessoa.nome // não consegue deletar atributo
pessoa.idade = 29 // consegue alterar idade
console.log(pessoa)

// Object.freeze = selado + valores constantes