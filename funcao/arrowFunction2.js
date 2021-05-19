// O this não varia quando utilizado em uma arrow function. Mantém contexto léxico

function Pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa