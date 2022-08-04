let velocity = 80;

if (velocity < 100) {
  console.log("Estamos numa velocidade aceitável");
} else {
  console.log("Entrando em velocidade de risco");
}

if (velocity <= 100) {
  console.log("Estamos numa velocidade aceitável");
} else if (velocity >= 100) {
  console.log("Entrando em velocidade de risco");
} else {
  console.log("Velocidade de risco");
}