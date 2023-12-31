import { readFileSync, writeFileSync } from "fs"
import Result from "../classes/Result"

export function readFile(path: string, filename: string) {
  const data = readFileSync(path + filename, { encoding: "utf-8" })
    .replaceAll("\"", "")
    .replaceAll("Golos", "Gols")
    .replaceAll(" %", "")
    .replaceAll(",", ".")
    .replaceAll(":", "")
    .replaceAll("\r", "")
    
  return data.split("\n")
}

export function saveResult(path: string, filename: string, data: Result[]) {
  const file = path + filename

  let stringFormatData = "Jogador Referência\tJogador Comparado\tResultado\n"
  data.forEach(result => {
    const stringFormatResult = `${result.referencePlayer.name}\t${result.comparedPlayer.name}\t${result.result}\n`
    stringFormatData += stringFormatResult
  })

  writeFileSync(file, stringFormatData)
}