import { readFileSync, writeFileSync } from "fs"
import Result from "../classes/Result"

export function readFile(path: string, filename: string) {
  const data = readFileSync(path + filename, { encoding: "utf-8" }).replace("\"", "").replace("Golos", "Gols").replace(" %", "").replace(",", ".")
  return data.split("\n")
}

export function saveResult(path: string, filename: string, data: Result[]) {
  const file = path + filename

  let stringFormatData = "Jogador Referência,Jogador Comparado,Resultado\n"
  data.forEach(result => {
    const stringFormatResult = `${result.referencePlayer.name},${result.comparedPlayer.name},${result.result}\n`
    stringFormatData += stringFormatResult
  })

  writeFileSync(file, stringFormatData)
}