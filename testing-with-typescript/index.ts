import { readFile, saveResult } from "./functions/file_manipulation"
import * as alg from "./functions/algorithms"
import * as fc from "./functions/other"

// Dados em forma de string
const data = readFile("./database/", "data.tsv")
// Gerando objetos do tipo Player a partir dos dados
const players = fc.generatePlayers(data)

// Jogador Referência
const rodrygo = players[0]
// Jogadores a serem comparados com o Referência
const otherPlayers = players.slice(1)

// Considerando apenas os parâmetros defensivos dos jogadores
rodrygo.data = fc.getDefensiveParams(rodrygo.data)
otherPlayers.forEach(pl => pl.data = fc.getDefensiveParams(pl.data))

const simiCosResults = fc.generateResults(rodrygo, otherPlayers, alg.simiCos)
const simiMediaResults = fc.generateResults(rodrygo, otherPlayers, alg.simiMedia)
const simiDistEucldResults = fc.generateResults(rodrygo, otherPlayers, alg.distEucld)

console.log();

// Gerando o arquivo de resultados
saveResult("./results/defensive-params/", "similaridade_media_attr.tsv", simiMediaResults)
saveResult("./results/defensive-params/", "similaridade_cossenos.tsv", simiCosResults)
saveResult("./results/defensive-params/", "similaridade_dist_euclidiana.tsv", simiDistEucldResults)