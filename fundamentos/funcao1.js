//Função sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // NaN porque 2 + undefined = NaN
imprimirSoma(2, 10, 4, 5, 6, 7, 8) // 12 porque 2 + 10 = 12. O resto é ignorado
imprimirSoma() // NaN porque undefined + undefined = NaN

// Função com retorno
function soma(a, b = 1){
    return a + b 
}

// soma(2, 3) // não funciona porque a função é retornada lá em cima, preciso printar p/ aparecer
console.log(soma(2, 3))
console.log(soma(2)); // 3 porque 2 + 1 = 3, como passo apenas um parâmetro o resto usa o default
console.log(soma()) // NaN