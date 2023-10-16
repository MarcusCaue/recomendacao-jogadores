import Player from "../classes/Player"
import Result from "../classes/Result"

type Algorihtm = (attrOne: number[], attrTwo: number[]) => number

export function generateResults(referencePlayer: Player, comparedPlayers: Player[], algorithm: Algorihtm) {
  const results: Result[] = []

  comparedPlayers.forEach(pl => {
    const value = algorithm(referencePlayer.data, pl.data)
    const result = new Result(referencePlayer, pl, value) 
    results.push(result)
  })

  return results
}

export function generatePlayers(data: string[]) {  
  const players: Player[] = []

  // lines.length
  for (let i = 1; i < data.length; i++) {
    const dataPlayer = data[i].split("\t")
    
    const name = dataPlayer[0]
    const team = dataPlayer[1]
    const values = dataPlayer.slice(2).map(v => parseFloat(v))

    const pl = new Player(name, team, values)

    players.push(pl)
  }

  return players
}