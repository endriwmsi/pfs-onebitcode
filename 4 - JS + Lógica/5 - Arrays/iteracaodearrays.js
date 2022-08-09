let hitchedSpaceships = ["Deméter", "Darwin", "Supernova", "Fenix", "Puller"]

// let with7Chars = hitchedSpaceships.find(element => { return element.length >= 7 })
// console.log(with7Chars)

// let with7Chars = hitchedSpaceships.filter(element => { return element.length >= 7 })
// console.log(with7Chars)

let upcasedSpaceships = hitchedSpaceships.map(function(currentSpaceship, index) {
  let upcased = currentSpaceship.toUpperCase()
  return upcased
})
console.log(upcasedSpaceships)

hitchedSpaceships.forEach(function(currentSpaceship, index) {
  console.log("Nave: " + currentSpaceship + "\nIndice: " + index)
})