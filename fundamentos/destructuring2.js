const [a] = [10]
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8] // destrutucting de array. Cuidado que parece muito com atribuição de array
console.log(n1, n3, n5, n6) // 10 9 undefined 0

const [, [, nota]] = [[, 8, 8], [9, 6, 8]] // na pratica não utilizaremos muito no dia-dia porque dificulta código 
console.log(nota) // 6