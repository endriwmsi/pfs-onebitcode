import "core-js"
import "regenerator-runtime/runtime"

import Neo from "./neo"
import { getNeos } from "./neo_service"

async function loadNeos() {
  let neos = []
  let neosJson = await getNeos()
  neosJson.forEach(neo => {
    const minDiameter = neo["estimated_diameter"]["kilometers"]["estimated_diameter_min"]
    const maxDiameter = neo["estimated_diameter"]["kilometers"]["estimated_diameter_max"]
    const averageDiameter = (minDiameter + maxDiameter /2)
    const newNeo = new Neo(neo["id"], neo["name"], averageDiameter, neo("is_entry_object"))
    neos.push(newNeo)
  })
  console.log(neos)
}

loadNeos()