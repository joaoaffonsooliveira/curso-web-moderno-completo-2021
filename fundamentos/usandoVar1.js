{
    {
        {
            {var sera = 'Será???'}
        }
    }
}
console.log(sera) // consigo acessar a variável sera fora do bloco de código porque é escopo global

function teste() {
    var local = 123
    console.log(local)
}

teste()
console.log(local) // Erro porque não consigo acessar a variável fora da função