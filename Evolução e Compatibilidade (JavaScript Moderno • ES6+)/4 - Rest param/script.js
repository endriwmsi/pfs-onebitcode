function greetCrew(message, ...names) {
  names.forEach(name => console.log(`${message}, ${name}`))
}

greetCrew("Seja bem-vindo", "Arthur", "Jake", "Melissa")