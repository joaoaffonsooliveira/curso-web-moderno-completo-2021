const funcs = []

for (let i = 0; i < 10; i++){
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]() //2
funcs[6]() //6
funcs[8]() //8
// É como se a função tivesse memória do valor de i naquele dado instante. Closure