let spaceship = "Elemental";
let velocity = 20

console.log(!(velocity > 19));
// NÃO V = F

console.log(!(spaceship == "Golias"));
// NÃO F = V

console.log(!(velocity > 25 && spaceship == "Elemental") || (velocity - 3 == 17 && spaceship.length + 1 > 15));
// !(velocity > 25 && spaceship == "Elemental") || (velocity 17 == 17 && 10 > 15)
// !(velocity > 25 && spaceship == "Elemental") || (V && F)
// !V || F
// V