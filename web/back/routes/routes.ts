import { FastifyInstance, FastifyRequest } from "fastify";
import { readFile, saveResult } from "../functions/file-manipulation"
import { FilterPlayerRequestBody } from "../interfaces/RequestBody";
import * as fc from "../functions/other"
import * as alg from "../functions/algorithms"
import Result from "../classes/Result";

// ================ VARIÁVEIS GLOBAIS ================ //

// Dados dos jogadores em forma de string
const data = readFile("./database/", "atacantes-2.tsv")
// Gerando objetos do tipo Player
const players = fc.generatePlayers(data)
// Algoritmos de similaridade e distância
const algorithms = [ alg.simiCos, alg.distEucld, alg.simiMedia ]

// Variável global que vai guardar o corpo da requisição feita pelo formulário de FILTRO
let body : FilterPlayerRequestBody
// Variável global para armazenar os resultados gerados quando um dos algoritmos é executado
let results: Result[] = []

// =================================================== //


export async function routes(server: FastifyInstance) {
  // Rota de teste
  server.get("/hello", async () => { return { message: "Olá mundo!"} })

  // Retorno de jogadores
  server.get("/players", async () => players)

  // Retorna o cabeçalho (nome das colunas) da base de dados
  server.get("/players/header", async () => {
    const header = data[0].replaceAll(".", "").split("\t")
    return header
  })

  // Roda um algoritmo dado um jogador de referência, um conjunto de parâmetros e um conjunto de jogadores
  server.get("/players/result", async () => {
    const referencePlayer = players[body.referencePlayer]

    let otherPlayers
    // Todos os outros jogadores
    if (body.otherPlayers.includes(-1)) {
      otherPlayers = players.filter((_pl, index) => index !== body.referencePlayer)
    } else {
      otherPlayers = players.filter((_pl, index) => body.otherPlayers.includes(index))
    }

    let params
    // Todos os outros parâmetros
    if (body.params.includes(-1)) {
      params = []
      for (let i = 0; i < players[0].data.length; i++)
        params.push(i)
    } else {
      params = body.params
    }

    const alg = algorithms[body.algId]
    
    const algResults = fc.generateResults(referencePlayer, otherPlayers, alg, params)
    
    results = algResults

    return algResults
  })

  // Salva os resultados em um arquivo
  server.post("/players/result/save", async () => {

    const alg = algorithms[body.algId]
    const referencePlayer = players[body.referencePlayer]

    const sortedResults = fc.sortResults(results, alg.name)
    const fileName = `${referencePlayer.name.toLowerCase().split(" ")[0]}-${alg.name.toLowerCase()}.tsv`
    saveResult("./results/novembro/", fileName, sortedResults)
  })

  // Atribui os dados da requisição do formulário de FILTRO à variável que guarda esses dados
  server.post("/players/filter", async (request: FastifyRequest<{ Body: FilterPlayerRequestBody }>) => body = request.body)

}