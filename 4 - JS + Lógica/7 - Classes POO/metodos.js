class Spaceship {
  constructor(name) {
    this.name = name
    this.velocity = 0
  }

  speedUp() {
    this.velocity += acceleration
  }
}

let artemis = new Spaceship("Ártemis")
artemis.speedUp(10)
artemis.speedUp(15)
console.log(artemis)