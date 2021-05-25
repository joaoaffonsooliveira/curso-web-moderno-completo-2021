Array.prototype.forEach2 = function (callback) {
    for(let i = 0; i < this.length; i++) { // acesso a instância de um array pelo this
        callback(this[i], i, this)
    }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

// gerava erro porque não tinha forEach2 
aprovados.forEach2(function(nome, indice) {
    console.log(`${indice + 1} ${nome}`)
})