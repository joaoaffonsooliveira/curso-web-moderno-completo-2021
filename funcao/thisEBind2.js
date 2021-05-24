// Primeira forma de driblar a variação do this é usando bind

function Pessoa() {
    this.idade = 0

    setInterval(function() {
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000) // a cada 1 segundo a função anônima é disparada
}
/*Sem o .bind(this) no final geraria um erro porque o this não estaria apontando para a pessoa criada abaixo */

new Pessoa // instanciando um objeto


// Segunda forma de driblar a variação do this é com o artifício tecnologico de uma variável.

function Pessoa() {
    this.idade = 0

    const self = this
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }, 1000)
}
/* Como self é uma constante, ele se mantém ao longo do código, justamente por isso não importa quem chama a função
o self sempre apontará p/ pessoa porque o self não varia, é uma forma de travar o valor de this para o objeto.*/

new Pessoa