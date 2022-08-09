class Spaceship {
  constructor(name, maxCrew, maxRecommendedVelocity) {
    this.name = name
    this.maxCrew = maxCrew
    this.maxRecommendedVelocity = maxRecommendedVelocity
    this.currentVelocity = 0
  }

  speedUp(acceleration) {
    this.currentVelocity += acceleration
    if (this.currentVelocity > this.maxRecommendedVelocity) {
      console.log("VELOCIDADE MÁXIMA ULTRAPASSADA!!\nDiminua ou poderá provocar danos à nave")
    }
  }
}

class TransportSpaceship extends Spaceship {
  speedUp() {
    console.log("Naves de transporte só aumentam a velocidade em 1Km/s")
    this.currentVelocity += 1
  }
}

let transportSpaceship = new TransportSpaceship("Transportadora", 4, 100)
transportSpaceship.speedUp(130)

console.log(transportSpaceship)