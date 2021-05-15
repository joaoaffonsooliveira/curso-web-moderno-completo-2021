const prod1 = {} // Criação de um objeto literal
prod1.nome = 'Celular Ultra Mega' // modelo chave = valor
prod1.preco =  4998.90
prod1['Desconto Legal'] = 0.40 // Evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa polo',
    preco: 79.90,
    obj: {
        blabla: 1,
        obj: {
            blabla: 2
        }
    }
}
// A notação acima é mais utilizada, perceba a criação de objeto dentro de objeto
console.log(prod2)
