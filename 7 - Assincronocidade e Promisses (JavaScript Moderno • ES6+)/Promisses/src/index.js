let komodoShip = {
  name: "komodo",
  velocity: 80,
  acceleration: 10
}

const velocityAfter2Seconds = (velocity, acceleration) => {
  return new Promisse(function(resolve, reject) {
    setTimeout(() => {
      if (acceleration > 0) {
        velocity += acceleration * 2
        console.log(`Nova velocidade: ${velocity}`)
        resolve(velocity)
      } else {
        console.log("Aceleração inválida")
        reject("Não Possui aceleração")
      }
    }, 1000)
  })
}

velocityAfter2Seconds(komodoShip.velocity, komodoShip.acceleration).then((velocity => {
  komodoShip.velocity = velocity
  console.log("Depois de Acelerar\n", komodoShip)
}))
console.log("Exec de promisses")
console.log(komodoShip)