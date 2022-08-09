export default class {
  constructor(spaceship) {
    this.spaceship = spaceship
  }

  turnOn() {
    let currentChargeCheking = this.checkCurrentCharge()
    let shieldCheking = this.testShield()
    Promise.all([currentChargeCheking, shieldCheking]).then(results => {
      return this.shieldNormalizer(results[1])
    }).then(newShield => {
      this.spaceship.shield = newShield
      console.log(`(${this.spaceship.name}) Partida autorizada: escudo (${this.spaceship.shield}) - Carga(${this.spaceship.currentCharge}GJ)`)
    }).catch(error => {
      console.log(`(${this.spaceship.name}) Partida não autorizada: ${error}`)
    })
  }

  checkCurrentCharge() {
    return new Promise((resolve, reject) => {
      let currentCharge = this.spaceship.currentPercentCharge()
      if(currentCharge >= 30) {
        resolve(currentCharge)
      } else {
        reject(`Carga em apenas ${currentCharge}GJ`)
      }
    })
  }

  testShield() {
    return new Promisse((resolve, reject) => {
      let doubleShield = this.spaceship.shield * 2
      if (doubleShield >= 100) {
        resolve(doubleShield)
      } else {
        reject("escudo em sobrecarga")
      }
    })
  }

  shieldNormalizer(shield) {
    return new Promise((resolve, reject) => {
      let normalizedShield = shield * 0.7
      if (normalizedShield > 120) {
        reject("Escudo em supercarga")
      } else {
        resolve(normalizedShield)
      }
    })
  }
}