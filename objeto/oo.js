/* Antes do paradigma tinhamos o go to, que era simplesmente a execução das linhas de código
e direcionamento para outras linhas de código */
/* Paradigma é um modelo abstrato, forma de representação do mundo. Existe, por exemplo
a forma procedural, que entende o mundo por procedimentos e a Orientada a objetos que entende
o mundo é representado por vários objetos*/

// CÓDIGO NÃO EXECUTÁVEL!!!

// PROCEDURAL
/* A procedural entende o mundo por meio de procedimentos. No exemplo abaixo temos um procedimento,
uma função, que recebe dados que serão processados gerando uma saída. Ou seja, as funções manipulam os dados
um exemplo disso seria a linguagem C. Manipulamos os dados usando funções*/
processamento(valor1, valor2, valor3)

 // OO - ORIENTADO A OBJETOS
 /* Na OO entende o mundo por meio de objetos. Ou seja, o mundo é composto por objetos e suas relações.
 O objeto funciona como uma representação de algo no mundo, encapsula um conjunto de atributos / dados que
 representam esse objeto. Dentro do objeto podemos passar procedimentos(funções). Quando chamamos um procedimento
 fazemos referenciando o objeto. Ou seja, manipulamos os dados usando os objetos
 Um exemplo seria, carro possui atributos(número de portas, cor, tipo de pintura) e possui procedimentos(ligar,
desligar, etc*/
 objeto = {
     valor1,
     valor2,
     valor3,
     processamento() {
         // ...
     }
 }

 objeto.processamento() // No OO o foco passou a ser o objeto

 // Principios importantes:
 /* 1. ABSTRAÇÃO --> a abstração varia de acordo com as necessidades. Ex: O objeto carro pode variar 
 sua abstração dependendo a necessidade. Uma montadora não possui as mesmas necessidades de uma revendedora*/
 /* 2. ENCAPSULAMENTO --> quanto mais encapsulado, quanto mais escondido, melhor. Objetos com alto nível de
 dependência do objeto, ou seja, alto nível de acoplamneto é ruim. A pessoa que usa o objeto não precisa saber
 de todos os detalhes, somente o que ela vai usar */
 /* 3. HERANÇA (prototype) --> temos dois conceitos aqui, a COMPOSIÇÃO e a HERANÇA. Na composição temos um
 objeto dentro de um objeto, dentro de um objeto. Na herança temos uma relação parecida aonde o filho recebe os
 mesmos atributos do pai.*/
 /* 4. POLIMORFISMO --> É a ideia de que pode aceitar múltiplas formas devido a herança e composição.
 Exemplo: objeto pai (carro) aceita Ferrari, uno, fiat 500, vários tipos de carro porque alguns atributos
 são parecidos.*/