// estrutura de repetição do while
// o do while é parecido com o while, porém inicializa o código pelo menos uma vez
// executa o código primeiro e depois checa se deve continuar ou não
// é a única expressão que possui uma estrutura de repetição após o bloco de código

function getInteiroAleatorio(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1

do {
    opcao = getInteiroAleatorio(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
} while( opcao != -1)