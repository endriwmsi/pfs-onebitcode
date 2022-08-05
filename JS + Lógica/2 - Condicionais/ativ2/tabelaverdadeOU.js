let spaceship = "Elemental";
let velocity = 20

console.log(spaceship.length == 9 || velocity > 15);
// V ou V = V

console.log(velocity > 10 || velocity < 19);
// V ou F = V

console.log(velocity < 17 || spaceship == "Elemental");
// F ou V = V

console.log(spaceship == "Golias" || velocity > 21);
// F ou F = F