import Player from "../classes/Player"
import Result from "../classes/Result"
import Algorithm from "../interfaces/Algorithm"

// Verifica se uma string contém letras
function havingLetter(value: string) {
  const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."]

  for (let i = 0; i < value.length; i++) {
    let char = value[i]
    let inDigitsList = digits.includes(char)

    if (inDigitsList === false) 
      return true
  }

  return false
}

// Ordena os resultados dependendo do algoritmo utilizado
export function sortResults(data: Result[], algName: string) {
  const sortedResults = (algName === "simiCos" || algName === "simiMedia") 
    ? data.sort((a, b) => b.result - a.result) // Ordem decrescente
    : data.sort((a, b) => a.result - b.result) // Ordem crescente

  return sortedResults
}

// Salva os resultados da análise em um array do tipo Result
export function generateResults(referencePlayer: Player, comparedPlayers: Player[], algorithm: Algorithm, params: number[]) {
  const referencePlayerData = referencePlayer.data.filter((_d, index) => params.includes(index))
  
  const results: Result[] = comparedPlayers.map(pl => {
    const plData = pl.data.filter((_d, index) => params.includes(index))
    const value = algorithm(referencePlayerData, plData)
    const result = new Result(referencePlayer, pl, value) 
    return result
  })

  return results
}

// Pega os dados dos jogadores no arquivo e transforma em objetos do tipo Player
export function generatePlayers(data: string[]) {  
  const players: Player[] = []

  for (let i = 1; i < data.length; i++) {
    const dataPlayer = data[i].split("\t")
    
    const name = dataPlayer[0]
    const values: number[] = []
    
    dataPlayer.slice(1).forEach(dPl => {
      if (! havingLetter(dPl)) {
        values.push(parseFloat(dPl))
      }
    })

    const pl = new Player(name, values)

    players.push(pl)
  }

  return players
}
