let distanceInLy = prompt("Digite a distância em Anos-luz")
let chosenOption = prompt("Para qual unidade deseja converter?\n1. Parse(pc)\n2. Unidade astronômica" +
                          "\n3. Quilômetros (km)\n\n(Digite o número da opção desejada)")

let chosenUnity
let convertedDistance

switch (chosenOption) {
  case "1":
    chosenUnity = "Parsec"
    convertedDistance = distanceInLy * 0.306601
    break;
  case "2":
    chosenUnity = "Unidade Astronômica"
    convertedDistance = distanceInLy * 63241.1
    break;
  case "3":
    chosenUnity = "Quilômetros"
    convertedDistance = distanceInLy * 9.5 * Math.pow(10, 12)
    break;
  default:
    chosenUnity = "Unidade não identificada"
    convertedDistance = "Conversão fora do escopo"
    break;
}

alert("Distância em anos-luz: " + distanceInLy + "\n" + chosenUnity + ": " + convertedDistance)