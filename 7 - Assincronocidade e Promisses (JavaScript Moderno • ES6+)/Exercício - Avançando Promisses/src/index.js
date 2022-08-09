const increaseVelocity = function(velocityToIncrease) {
  return new Promise((resolve, reject) => {
    if(velocityToIncrease <= 0) {
      reject("Frenagem acionada")
    } else {
      resolve(velocityToIncrease * 0.9)
    }
  })
}

const newBatteryConsumption = function(currentVelocity, velocityToIncrease) {
  return new Promise((resolve, reject) => {
    let newBatteryConsumption = (currentVelocity + velocityToIncrease) / 10000
    if(newBatteryConsumption > 0) {
      resolve(newBatteryConsumption)
    } else {
      reject("Consumo zerado!")
    }
  })
}

let velocity = 70
let velocityToIncreased = increaseVelocity(velocity)
let batteryConsumption = newBatteryConsumption(-80, velocity)

// Execução atômica = ou executa com sucesso as duas ou não executa
Promise.all([velocityToIncreased, batteryConsumption]).then(results => {
  console.log(results)
}).catch(errors => {
  console.log(errors)
})

