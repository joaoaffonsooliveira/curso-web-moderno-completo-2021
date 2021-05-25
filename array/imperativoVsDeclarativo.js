/* O IMPERATIVO se preza muito da forma como está sendo feita. Você diz como deve ser feito cada passo a passo
, mostrando tudo que acontece por baixo dos panos.
Na abordagem DECLARATIVO estou mais preocupado no que irei fazer, e fico reaproveitando o código muitas vezes
Eu não me importo que o método map tem um for, que adiciona etc. Só passo p/ ele os critérios, os parâmetros
não me preocupo muito com os detalhes internos e sim com o que será feito.*/

/* No SQL, por exemplo, temos uma linguagem mais declarativa
select codigo, nome, email from clientes where ativo = 1 
veja que não me importo com o que acontece por baixo dos panos mas sim com o que
No paradigma funcional usamos mais código declarativo */

const alunos = [
    { nome: 'João', nota: 7.9 },
    { nome: 'Maria', nota: 9.2 }
]

// Imperativo
let total1 = 0
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)

// Declarativo
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual

const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)