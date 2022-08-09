// 'Let' Permite declarar um novo valor a uma mesma variável
let spaceship = "FE Supernova";
console.log(spaceship);

spaceship = "FE Helmet"; /* Aqui a variável já existe, então com 'let' não é necessário declarar novamente */
console.log(spaceship);

// 'Const' é usado para atribuir um valor para uma var que nunca vai mudar
const squad = "Estelar";
console.log(squad);

squad = "Espacial"; /* erro por que 'const' não pode mudar */
console.log(squad);

// 'Var'
var velocity = 80;
console.log(velocity);

velocity = 25;
console.log(velocity);

// --------------------------- //

let departureConfirmation = confirm("Nave pronta para decolar. Aguardando confirmação!");
console.log(departureConfirmation);

let pilot = prompt("Qual o seu nome, piloto?");
console.log(pilot);