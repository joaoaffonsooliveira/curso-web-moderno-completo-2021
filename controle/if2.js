function teste1(num) {
    if(num > 7) {
        console.log(num)
    
    console.log('Final') // independentemente da identação, no JS a linha de código é executada.
    }
}

// teste1(6)
// teste1(8)

function teste2(num) {
    if (num > 7); {
        console.log(num)  // printa 6 e 8 porque possui um ponto e vírgula alí no if!! Não use ponto e vírgula com estruturas de controle
    }
}

teste2(6)
teste2(8)