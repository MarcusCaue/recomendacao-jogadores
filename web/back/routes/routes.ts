import { FastifyInstance } from "fastify";
import { readFile } from "../functions/file_manipulation"
import { FilterPlayerRequestBody } from "../interfaces/RequestBody";
import * as fc from "../functions/other"
import * as alg from "../functions/algorithms"


// Dados dos jogadores em forma de string
const data = readFile("./database/", "data.tsv")
// Gerando objetos do tipo Player
const players = fc.generatePlayers(data)
// Algoritmos de similaridade e distância
const algorithms = [ alg.simiCos, alg.distEucld, alg.simiMedia ]

// Variável global que vai guardar o corpo da requisição feita pelo formulário de FILTRO
let body : FilterPlayerRequestBody

export async function routes(server: FastifyInstance) {
  server.get("/hello", async () => {
    return {
      message: "Olá mundo!"
    }
  })

  // Retorna todos os jogadores
  server.get("/players", async () => {
    return players.slice(0, 100)
  })

  // Roda o algoritmo com um jogador
  server.get("/players/:idAlg/:idReferencia", async (request) => {
    let { idAlg, idReferencia } = request.params

    idAlg = parseInt(idAlg); idReferencia = parseInt(idReferencia);

    const choicedAlg = algorithms[idAlg]
    const referencePlayer = players[idReferencia]
    const otherPlayers = players.filter(pl => pl.name !== referencePlayer.name)

    // const results = fc.generateResults(referencePlayer, otherPlayers, choicedAlg)

    return results
  })

  // Retorna o cabeçalho (nome das colunas) da base de dados
  server.get("/players/header", async () => {
    return data[0].replaceAll(".", "").split("\t")
  })

  server.get("/players/result", async (request, reply) => {
    const referencePlayer = players[body.referencePlayer]
    const otherPlayers = players.filter((_pl, index) => body.otherPlayers.includes(index))
    const params = body.params
    const alg = algorithms[body.algId]

    const results = fc.generateResults(referencePlayer, otherPlayers, alg, params)

    return results
  })

  server.post("/players/filter", async (request) => body = request.body)


}