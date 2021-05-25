/* Uma classe no JS é quase a mesma coisa que a função construtora, só uma forma diferente de escrever.
Uma sintaxe diferente. */

class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}
/* é uma forma de dizer que pai tem como protótipo o avô, a sintaxe só muda um pouco. Porém por baixo dos panos
é basicamente a mesma forma de mostrar que estamos usando funções e passando as coisas como protótipo */
class Pai extends Avo { 
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor() {
        super('Silva')
    }
}

const filho = new Filho
console.log(filho)