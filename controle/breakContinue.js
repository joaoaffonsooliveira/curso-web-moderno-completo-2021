// usando Break e Continue
// o break e continue serve como um desvio de fluxo, porém, não é muito recomendado
// na dúvida não use break e continue. Não é bom
// o break e continue interrompem o laço mais próximo a eles
  
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (i in nums) {
    if (i == 5) {
        break  // quando chega o 5 o break sai do laço
    }
    console.log(`${i} = ${nums[i]}`)
}

for (j in nums) {
    if (j == 5) {
        continue // o continue interrompe o laço no j = 5 e continua no j seguinte
    }
    console.log(`${j} = ${nums[j]}`)
}

externo: for (i in nums) {
    for (j in nums) {
        if(i == 2 && j == 3) break externo // criei um identificador externo para interromper o laço mais externo
        console.log(`Par = ${i},${j}`)
    }
}