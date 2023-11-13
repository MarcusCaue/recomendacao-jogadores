import { FastifyInstance } from "fastify";
import { readFile } from "../functions/file_manipulation"
import * as fc from "../functions/other"
import * as alg from "../functions/algorithms"
import { z } from "zod"


// Dados dos jogadores em forma de string
const data = readFile("./database/", "data.tsv")
// Gerando objetos do tipo Player
const players = fc.generatePlayers(data)
// Algoritmos de similaridade e distância
const algorithms = [ alg.simiCos, alg.distEucld, alg.simiMedia ]

let body = {}

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

    const results = fc.generateResults(referencePlayer, otherPlayers, choicedAlg)

    return results
  })

  // Retorna o cabeçalho (nome das colunas) da base de dados
  server.get("/players/header", async () => {
    return data[0].replaceAll(".", "").split("\t")
  })

  server.get("/players/result", async (request, reply) => {
    
    reply.redirect("http://localhost:5173/")
    
    
  })

  server.post("/players/filter", async (request) => {

    const data = request.body
    body = data

  })


}