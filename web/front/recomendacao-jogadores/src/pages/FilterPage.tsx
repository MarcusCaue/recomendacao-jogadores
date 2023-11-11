import { api } from "../tools/axios"
import { Player } from "../interfaces/Player"
import { useEffect, useState } from "react"

export default function FilterPage() {
  const [players, setPlayers] = useState<Player[]>([])
  const [header, setHeader] = useState<string[]>([])

  useEffect(() => {
    api.get("/players/header").then(result => setHeader(result.data))
    api.get("/players").then(result => setPlayers(result.data))
  }, [])

  return (
    <>
      <form action="http://localhost:2102/players/filter" method="post" className="container mt-10">
        
        {/* Jogador Referência */}
        <section className="my-5">
          <label htmlFor="referencePlayer" className="text-xl"> - Escolha o jogador <span className="underline">referência</span>: </label>
          <select id="referencePlayer" name="referencePlayer" className="p-1 rounded cursor-pointer">
            {players.map((pl, index) => <option key={index} value={pl.name.toLowerCase().replaceAll(" ", "-")}> {pl.name} </option>)}
          </select>
        </section>

        {/* Outros jogadores a comparar */}
        <section className="otherPlayers">
          <h2 className="text-xl"> - Escolha os <span className="underline">outros jogadores</span>: </h2>
         
          <div className="checkboxes-container mt-2">
            <div>
              <input className="cursor-pointer" type="checkbox" value={players.length} id="allPlayers" name="allPlayers" />
              <label htmlFor="allPlayers"> Todos </label>
            </div>
            <div className="flex gap-x-5 flex-wrap">
              {
                players.map((pl, index) => {
                  return (
                    <div key={index}>
                      <input className="cursor-pointer" type="checkbox" value={index} id={pl.name} name={pl.name}/>
                      <label className="" htmlFor={pl.name}> {pl.name} </label>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </section>

        {/* Escolha dos Parâmetros  */}
        <section className="my-5">
          <h2 className="text-xl"> - Escolha os <span className="underline">parâmetros</span>: </h2>
          <div className="checkboxes-container mt-2">
            <div>
              <input className="cursor-pointer" type="checkbox" value={header.length} id="allParams" name="allParams" />
              <label htmlFor="allParams"> Todos </label>
            </div>
            <div className="flex gap-x-5 flex-wrap">
              {
                header.slice(2).map((param, index) => {
                  return (
                    <div key={index}>
                      <input className="cursor-pointer" type="checkbox" value={index} id={param} name={param}/>
                      <label className="" htmlFor={param}> {param} </label>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </section>

        {/* Escolha do Algoritmo  */}
        <section className="my-5">
          <label htmlFor="algorithm" className="text-xl"> - Escolha o <span className="underline">algoritmo</span>: </label>
          <select id="algorithm" name="algorithm" className="p-1 rounded cursor-pointer">
            <option value="0"> Similaridade por Cossenos </option>
            <option value="1"> Distância Euclidiana </option>
            <option value="2"> Similaridade pela Média dos Atributos </option>
          </select>
        </section>

        {/* Área dos botões */}
        <section className="my-5 flex justify-end gap-5">
          <button type="reset" className="block w-1/6 px-5 py-2 text-xl bg-gray-500 rounded-lg cursor-pointer text-white"> Limpar </button>
          <button className="block w-1/6 px-5 py-2 text-xl bg-emerald-500 rounded-lg cursor-pointer text-white"> Enviar </button>
        </section>
      </form>
    </>
  )
}