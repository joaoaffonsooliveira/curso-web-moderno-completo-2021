const sequencia = {
    _valor: 1, // É uma convenção entre programadores mostrando que o atributo valor é privado. OBS: ela não torna privado, é só convenção.
    get valor() { return this._valor++ },
    set valor(valor) { 
        if(valor > this._valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)