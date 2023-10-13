import { readFile, saveResult } from "./functions/file_manipulation"
import { simiCos } from "./functions/algorithms"
import { generatePlayers, generateResults } from "./functions/other"

const data = readFile("./database/", "data.tsv")
const players = generatePlayers(data)

const rodrygo = players[0]
const otherPlayers = players.slice(1)

const simiCosResults = generateResults(rodrygo, otherPlayers, simiCos)

saveResult("./results/", "similaridade_cossenos.csv", simiCosResults)