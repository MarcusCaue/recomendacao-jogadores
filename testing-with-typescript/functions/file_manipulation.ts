import { readFileSync } from "fs"
import Result from "../classes/Result"
import Player from "../classes/Player"

export function readFile(path: string, filename: string) {
  const data = readFileSync(path + filename, { encoding: "utf-8" }).replace("\"", "").replace("Golos", "Gols").replace(" %", "").replace(",", ".")
  return data
}

export function saveResult(path: string, filename: string, data: Result[]) {
  
}

export function generatePlayers(data: string) {
  const lines = data.split("\n")
  
  const players: Player[] = []

  // lines.length
  for (let i = 1; i < 11; i++) {
    const dataPlayer = lines[i].split("\t")
    
    const name = dataPlayer[0]
    const team = dataPlayer[1]
    const values = dataPlayer.slice(2).map(v => parseFloat(v))

    const pl = new Player(name, team, values)

    players.push(pl)
  }

  return players
}