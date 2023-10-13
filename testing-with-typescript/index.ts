import { readFile, generatePlayers } from "./functions/file_manipulation"
import { simiCos } from "./functions/algorithms"

const data = readFile("./database/", "data.tsv")
const players = generatePlayers(data)

