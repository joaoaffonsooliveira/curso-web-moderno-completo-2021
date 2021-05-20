/* A função carrega consigo a informação do local aonde ela foi criada, ou seja o contexto léxico
de quando foi criada */

const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao() // chama a função de cima que tem valor setado como 'Global' naquele contexto léxico
}

exec()