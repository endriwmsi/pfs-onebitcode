let spaceshipNames = ["Elemental", "Darwin", "Ártemis", "Supernova"]

console.log(spaceshipNames)

let removeSpaceships = spaceshipNames.splice(1, 2, "Démeter", "Puller", "Golias")

console.log(spaceshipNames)
console.log(removeSpaceships)


let extractedNames = spaceshipNames.slice(1, 3)
console.log(spaceshipNames)
console.log(extractedNames)