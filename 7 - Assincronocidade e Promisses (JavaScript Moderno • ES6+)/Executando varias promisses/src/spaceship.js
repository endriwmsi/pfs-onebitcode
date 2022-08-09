class Spaceship {
  constructor(name, maxCapacity, currentCharge, shield) {
    this.name = name
    this.maxCapacity = maxCapacity
    this.currentChage = currentCharge
    this.shield = shield
  }

  currentPercentCharge() {
    return this.currentChage * 100 / this.maxCapacity
  }
}

export default Spaceship