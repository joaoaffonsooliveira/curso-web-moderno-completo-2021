const imprimirResultado = function(nota) {
    if(nota >= 7) {
        console.log('Aprovado com ' + nota)
    } else {
        console.log('Reprovado com ' + nota + ',' + ' se esforce um pouco mais')
    }
}

imprimirResultado(7)
imprimirResultado(5)
imprimirResultado('7') // aprovado. Cuidado quando estiver trabalhando com linguagem fracamente tipada!
imprimirResultado('Epa!') // reprovado. Cuidado quando estiver trabalhando com linguagem fracamente tipada!