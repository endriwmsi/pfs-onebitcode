function greetPilot (name, message = "olá") {
  alert(message + "," + name)
}
greetPilot("John Mars")

function speedUp (velocity, acceleration, unit = "Km/s") {
  let newVelocity = velocity + acceleration
  alert("Nova velocidade" + newVelocity + unit)
}
speedUp(50,20)