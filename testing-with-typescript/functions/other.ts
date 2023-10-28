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

export function getDefensiveParams(params: number[]) {

  /**
   * Índices no array de atributos do jogador, referenciado aqui pelo parâmetro "params":
   * 
   * 5 => Duelos defensivos
   * 6 => Duelos áereos ganhos
   * 7 => Interseções
   * 21 => Passes certos
   * 23 => Passes para trás certos
   * 27 => Passes inteligentes certos
   * 30 => Passes em profundidade certos
  */
 
  const defParams = [
    params[5], params[6], params[7], params[21], params[23], params[27], params[30],
  ]

  return defParams
}