// console.log(global)
global.MinhaApp = Object.freeze({
    saudacao() {
        return 'Estou em todos os lugares!'
    },
    nome: 'Sistema Legal'
})

// Pode ser muito perigoso ter um atributo que pode ser acessado de forma global. Isso dá muita margem para erros
// esse é um dos motivos para termos o node porque dividimos tudo deixando as coisas mais organizadas.
// Se eventualmente precisar usar um atributo de forma global use o Object.freeze para evitar possíveis bugs