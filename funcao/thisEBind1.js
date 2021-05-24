// O this da função arrow ele é um this associado ao contexto léxico

const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()

const falar2 = pessoa.falar /*pessoa.falar não foi alterado pelo bind. pessoa.falar.bind(pessoa) 
foi armazenado em falarDePessoa no caso anterior*/
falar2() // retorna undefined