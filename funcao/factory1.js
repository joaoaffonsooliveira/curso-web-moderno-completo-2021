/* Uma função factory é uma função que tem o objetivo de fabricar um objeto, ou seja
é uma função que retorna um objeto, muito útil para evitar que fiquemos criando objetos na mão */

// Factory simples
function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())