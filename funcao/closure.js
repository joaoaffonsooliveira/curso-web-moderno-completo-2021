// Closure é o escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e manipular variáveis externas à função

/* Closure é quando uma função é capaz de "lembrar" e acessar seu escopo léxico 
mesmo quando ela está sendo executada fora de seu escopo léxico. */

// Contexto léxico em ação!

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao()) // retorna 'Local'