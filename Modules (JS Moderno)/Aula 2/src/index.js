import Spaceship from "./spaceship"
import armamenntKind from "./armaments"
import { laserDefenses, steelDefenses } from "./defenses"
import basicDefenses from "./defenses"

const spaceship = new Spaceship("USS Enterprise", "James Tiberios Kirk", armamenntKind.laser, laserDefenses)
const basicSpaceship = new Spaceship("Nave Básica", "Astronauta Zin", [], basicDefenses)

console.log(spaceship)
console.log(basicSpaceship)