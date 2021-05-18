// usando a estrutura switch --> seleção multipla opção dentre várias linhas de código
// obs1: o switch diferentemente do if não retorna true or false, e sim um valor
// obs2: o switch by default fall through ou seja, segue o fluxo. Por isso, necessitamos do break
// Infelizmente o switch ainda não admite intervalos

const imprimirResultado = function(nota) {
    switch(Math.floor(nota)) {
        case 10:
        case 9:
            console.log('Quadro de honra')
            break
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default:
            console.log('Nota inválida')
    }
}
imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.9)
imprimirResultado(3.9)
imprimirResultado(11)


