let spaceship = {
  name: "Colossus",
  crewQuantity: 10,
  isHitched: false
}

/* Essa função não tem nenhum objetivo, apenas
manter os exemplos dentro de um escopo */

function convDesestructure() {
  // Desestruturação convencional
  // let spaceshipName = spaceship.name
  // let crewQuantity = spaceship.crewQuantity
  console.log(spaceshipName, crewQuantity)
}

function advDesestructure() {
  // Desestruturação avançada
  // let { name: spaceshipName, crewQuantity: crewQuantity } = spaceship // ou
  // let { name: spaceshipName, crewQuantity } = spaceship
  console.log(spaceshipName, crewQuantity)
}



