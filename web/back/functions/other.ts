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

export function getEspecificParams(data: number[], ...choicedParams: number[]) {
  const params = choicedParams.map(p => data[p])
  return params
}

export function getDefensiveParams(player: Player) {
  /**
   * Índices no array de atributos do jogador:
   * 
   * 5 => Duelos defensivos
   * 6 => Duelos áereos ganhos
   * 7 => Interseções
   * 21 => Passes certos
   * 23 => Passes para trás certos
   * 27 => Passes inteligentes certos
   * 30 => Passes em profundidade certos
  */
 
  const defParams = getEspecificParams(player.data, 5, 6, 7, 21, 23, 27, 30)
  return defParams
}

export function getOffensiveParams(player: Player) {
  /**
   * Índices no array de atributos do jogador:
   * 
   * 1  => Gols
   * 2  => Assistências
   * 3  => Duelos Ganhos
   * 8  => Gols sem ser por penâlti
   * 9  => Gols esperados
   * 10 => Gols de cabeça
   * 11 => Gols de cabeça / 90
   * 12 => Remates
   * 13 => Remates à baliza
   * 14 => Gols marcados, %
   * 15 => Cruzamentos certos
   * 16 => Cruzamentos precisos do flanco esquerdo
   * 17 => Cruzamentos precisos do flanco direito
   * 18 => Dribels / 90
   * 19 => Dribels com sucesso
   * 20 => Duelos ofensivos ganhos
   * 21 => Passes certos
   * 22 => Passes para frente certos
   * 24 => Passes laterais
   * 25 => Passes curtos/médios precisos
   * 26 => Passes longos certos
   * 27 => Passes inteligentes certos
   * 29 => Passes precisos para a área de penâlti
   * 31 => Passes progressivos certos
  */
 
  const offenParams = getEspecificParams(player.data, 1, 2, 3, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 24, 25, 26, 27, 29, 31)
  return offenParams
}