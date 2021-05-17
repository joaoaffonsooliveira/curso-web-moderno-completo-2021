// aula sobre operadores lógicos

// operadores binários

/*
V e V --> V
V e F --> F
F e ? --> F
*/

/*
V ou V --> V
V ou F --> V
V ou ? --> V
*/

/*
xor é ou exclusivo

V xor V --> F
V xor F --> V
F xor V --> V
V xor V --> F
*/

// operador unário

/* 
!V --> F
!F --> V
*/

function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete // operador unário
    /*
    return {
        comprarSorvete: comprarSorvete,
        comprarTv50: comprarTv50,
        comprarTv32: comprarTv32,
        manterSaudavel: manterSaudavel
    }
    */

   /* A forma acima é a forma mais correta de escrever o objeto, entretanto, quando a chave e
   valor são repetidos, novo recurso do ES2015 seria da forma abaixo, que é exatamente igual
   ao que foi escrito acima */

   return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))


