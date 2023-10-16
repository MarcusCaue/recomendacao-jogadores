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

// const simiCosResults = generateResults(rodrygo, otherPlayers, alg.simiCos)
// const simiMediaResults = fc.generateResults(rodrygo, otherPlayers, alg.simiMedia)

const simiDistEucldResults = fc.generateResults(rodrygo, otherPlayers, alg.distEucld)

console.log();

// Gerando o arquivo de resultados
// saveResult("./results/", "similaridade_media_attr.csv", simiMediaResults)