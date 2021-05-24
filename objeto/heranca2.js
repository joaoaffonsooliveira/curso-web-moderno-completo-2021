// Cadeia de protótipos (prototype chain)
Object.prototype.attr0 = '0' // não faça isso em casa!

const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B', attr3: '3' } // atribuo o avô como protótipo do pai
const filho = { __proto__: pai, attr3: 'C' } // atribuo ao filho o protótipo pai
/* console.log(filho.attr1) // mostra attr1 = 'A' porque pesquisou no pai, o pai não têm, pesquisa no avô,
como o avô possui attr1, herda do avô */
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3) /* filho.attr0 retornaria undefined caso não
houvessemos atribuido object.prototype.attr0 = '0'. Em filho.attr3 ele retorna C e não 3, isso porque C
já é encontrado em filho. O attr3 do filho sombreou o attr3 do pai*/

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // shadowing ou sombreamento de VelMax do protótipo carro
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}` /*uso o super para chamar/referenciar o método do meu protótipo carro*/
    }
}

Object.setPrototypeOf(ferrari, carro) // função importante que aponta carro como protótipo de ferrari
Object.setPrototypeOf(volvo, carro) // função importante que aponta carro como protótipo de volvo

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())