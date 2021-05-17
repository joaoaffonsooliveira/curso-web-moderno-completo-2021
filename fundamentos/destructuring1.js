//novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

// const nome = pessoa.nome // forma antiga/padrão
// const idade = pessoa.idade // forma antiga/padrão
const { nome, idade } = pessoa // operador destructure novo recurso do ES2015. É uma forma de extrair atributos
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const { sobrenome, bemHumorada = true} = pessoa // undefined true
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep } } = pessoa // o cep aparece, mas como undefined
console.log(logradouro, numero, cep) 

const { conta: { ag, num } } = pessoa // erro porque conta não existe dentro de pessoa 
console.log(ag, num)