// O foreach percorre e deixa o trabalho ser feito por você. Aprenderemos formas de percorrer o array.

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

/*internamente a função forEach tem um for que acontece por baixo dos panos que vai percorrendo cada elemento
do array com base no seu índice*/
/*no caso do forEach o índice não pode ser o primeiro parâmetro, se for usar tem que ser a partir do segundo */
aprovados.forEach(function(nome, indice, array, x) {
    console.log(`${indice + 1} ${nome}`) // indice + 1 para que o primeiro índice não seja 0
})
/*a forEach recebe vários parâmetros. pode chamar nome, o segundo é índice, o array é o terceiro. 
A partir do terceiro é undefined*/

aprovados.forEach(nome => console.log(nome)) // nesse outro exemplo percorre, mas não quero ver o índice

// passei uma função p/ uma constante e chamei o forEach
const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)