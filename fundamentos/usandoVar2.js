//Fuja do escopo global porque você pode estar sobrescrevendo algo
var numero = 1
{
    var numero = 2
    console.log('dentro =', numero)
}

console.log('fora =', numero)

// Dentro ou fora do bloco temos o valor 2
// Fuja do escopo global, principalmente no front end pode dar muitos erros por sobrescrever alguma variável
// Quando usamos var ela é escopo global para tudo, exceto para funções