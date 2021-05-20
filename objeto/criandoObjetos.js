// usando a notação literal
const obj1 = {}
console.log(obj1)

// Object em JS
console.log(typeof Object, typeof new Object) // function e object
const obj2 = new Object // objeto instanciado/criado por função construtora (operador new) do JS
console.log(obj2)

// Por meio de suas próprias funções construtoras
/* Preço e desconto ficam encapsulados, ou seja, estão acessíveis dentro da função apenas.
A partir do momento que o objeto é criando não podem ser modificados externamente */
function Produto(nome, preco, desc) {   
    this.nome = nome  // this.nome fica visível p/ fora, p/ ser chamado fora
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}
/* Temos dois níveis de visibilidade. Ou uma coisa é pública ou ela é privada.
no JS temos o escopo global, o escopo de função e o escopo de bloco */

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998.99, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// Função Factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('João', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())

// Criar um objeto usando Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Um função famosa que retorna Objeto...
const fromJSON = JSON.parse('{"info": "Sou um JSON"}') // transforma em objeto JSON
console.log(fromJSON.info)