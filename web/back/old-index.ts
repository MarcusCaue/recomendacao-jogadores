import { readFile, saveResult } from "./functions/file_manipulation"
import * as alg from "./functions/algorithms"
import * as fc from "./functions/other"
import Player from "./classes/Player"

// Dados em forma de string
const data = readFile("./database/", "data.tsv")
// Gerando objetos do tipo Player a partir dos dados
const players = fc.generatePlayers(data)

// Jogador Referência
const rodrygo = players[0]
// Jogadores a serem comparados com o Referência
const otherPlayers = players.slice(1)

// Considerando apenas os parâmetros defensivos dos jogadores
// const defParamsRodrygo = new Player(rodrygo.name, rodrygo.team, fc.getDefensiveParams(rodrygo))
// const defParamsOtherPl = otherPlayers.map(pl => new Player(pl.name, pl.team, fc.getDefensiveParams(pl)))

// Considerando apenas os parâmetros ofensivos dos jogadores
const offenParamsRodrygo = new Player(rodrygo.name, rodrygo.team, fc.getOffensiveParams(rodrygo))
const offenParamsOtherPl = otherPlayers.map(pl => new Player(pl.name, pl.team, fc.getOffensiveParams(pl)))

const simiCosResults = fc.generateResults(offenParamsRodrygo, offenParamsOtherPl, alg.simiCos)
const simiMediaResults = fc.generateResults(offenParamsRodrygo, offenParamsOtherPl, alg.simiMedia)
const simiDistEucldResults = fc.generateResults(offenParamsRodrygo, offenParamsOtherPl, alg.distEucld)

console.log();

// Gerando o arquivo de resultados
saveResult("./results/offensive-params/", "simi_media.tsv", simiMediaResults)
saveResult("./results/offensive-params/", "simi_cos.tsv", simiCosResults)
saveResult("./results/offensive-params/", "simi_eucld.tsv", simiDistEucldResults)