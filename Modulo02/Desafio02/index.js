// os clientes fazem uma avaliação da loja com nota de 1 a 5. em determinado dia,
// foram atendidos 100 clientes e as notas obtidas foram: 1 estrela (2 clientes),
//  2 estrelas (15 clientes), 3 estrelas (18 clientes), 4 estrelas (25 clientes),
//  5 estrelas (40 estrelas). O gerente decidiu calcular a nota media das 
// avaliações naquele dia. Retorne o valor da nota media considerando o valor 
// fixo de 100 clientes.

const starOne = 2;
const starTwo = 15;
const starThree = 18;
const starFour = 25;
const starFive = 40;

const somaMedia =
  1 * starOne + 2 * starTwo + 3 * starThree + 4 * starFour + 5 * starFive;

const mediaTotal =
  somaMedia / (starOne + starTwo + starThree + starFour + starFive);

console.log(mediaTotal);
