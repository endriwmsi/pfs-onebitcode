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
  constructor(name, maxCrew, maxRecommendedVelocity, maxLoadWeight) {
    super(name, maxCrew, maxRecommendedVelocity)
    this.maxLoadWeight = maxLoadWeight
  }
  speedUp(acceleration) {
    acceleration /= 2
    console.error("Incrementando velocidade em " + acceleration + "Km/s")
    super.speedUp(acceleration)
  }
}

let transportSpaceship = new TransportSpaceship("Transportadora", 4, 100, 400)
console.log(transportSpaceship)
transportSpaceship.speedUp(210)