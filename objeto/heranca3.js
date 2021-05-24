const pai = { nome: 'Pedro', corCabelo: 'preto' }

const filha1 = Object.create(pai) // cria um objeto novo(filha) tendo como protótipo o objeto pai
filha1.nome = 'Ana'
console.log(filha1.corCabelo) // herda a cor do cabelo do pai como preto

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true }
})

console.log(filha2.nome)
filha2.nome = 'Carla' // não consigo renomear porque coloquei writable = false
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1)) // se enumerable fosse false não conseguiria ver esse resultado
console.log(Object.keys(filha2))

for(let key in filha2) {
    filha2.hasOwnProperty(key) ?  // nome aparece como atributo próprio
        console.log(key) : console.log(`Por herança: ${key}`)  // cor de cabelo aparece como herança
}