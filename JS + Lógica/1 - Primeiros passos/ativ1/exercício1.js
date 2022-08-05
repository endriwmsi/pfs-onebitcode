alert("Bem vindo! A seguir pediremos que informe alguns dados.");

let nome = prompt("Qual seu nome?");

let age = prompt("Informe sua idade");

let ageConfirmation = confirm("Sua idade é " + age + " anos");

alert("Nome: " + nome + "\nIdade: " + age + "\nIdade Confirmada: " + ageConfirmation);