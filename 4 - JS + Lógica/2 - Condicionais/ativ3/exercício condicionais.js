 let pilotName = prompt("Qual é o nome do piloto?")
 let velocity = 0

 let newVelocity = prompt("Qual é a velocidade que você quer pilotar?")
 let confirmVelocity = confirm("Estamos acelerando para " + newVelocity + "km/s")

 if (confirmVelocity) {
  velocity = newVelocity
 }

if (velocity <= 0) {
  alert("Nave está parada. Considere partir e aumentar a velocidade")
} else if (velocity < 40) {
  alert("Você está de vagar, podemos aumentar mais!")
} else if (velocity < 80) {
  alert("Parece uma boa velocidade para manter...")
} else if (velocity < 100) {
  alert("Velocidade alta. considere diminuir")
} else {
  alert("Velocidade perigosa. Controle automático forçado")
}

alert("Piloto: " + pilotName + "\nVelocidade: " + velocity + "\nKm/s")