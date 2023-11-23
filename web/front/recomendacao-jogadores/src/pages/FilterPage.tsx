import { api } from "../tools/axios"
import { Player } from "../interfaces/Player"
import { FormEvent, useEffect, useState } from "react"

const sendForm = async (e: FormEvent) => {
  e.preventDefault()
  const form = document.getElementById("filterForm") 
  const referencePlayer = parseInt(form?.querySelector("[name=referencePlayer]")?.value)
  const otherPlayers : number[] = []
  
  form?.querySelectorAll("[name=otherPlayers]").forEach(item => {
    if (item.checked) {
      otherPlayers.push(parseInt(item.value))
    }
  })

  const params : number[] = []
  form?.querySelectorAll("[name=params]").forEach(item => {
    if (item.checked) {
      params.push(parseInt(item.value))
    }
  })

  const algId = parseInt(form?.querySelector("[name=algId]")?.value)

  const requestBody = {
    referencePlayer,
    otherPlayers,
    params,
    algId
  }

  await api.post("/players/filter", requestBody)

  window.location.href = "http://localhost:5173/players/result"
}

export default function FilterPage() {
  const [players, setPlayers] = useState<Player[]>([])
  const [header, setHeader] = useState<string[]>([])

  useEffect(() => {
    api.get("/players/header").then(result => setHeader(result.data))
    api.get("/players").then(result => setPlayers(result.data))
  }, [])

  return (
    <>
      <form id="filterForm" method="POST" className="container mt-10" onSubmit={sendForm}>
        
        {/* Jogador Referência */}
        <section className="my-5">
          <label htmlFor="referencePlayer" className="text-xl"> - Escolha o jogador <span className="underline">referência</span>: </label>
          <select id="referencePlayer" name="referencePlayer" className="p-1 rounded cursor-pointer border border-gray-300">
            { players.map((pl, index) => <option key={index} value={index}> {pl.name} </option>) }
          </select>
        </section>

        {/* Outros jogadores a comparar */}
        <section className="otherPlayers">
          <h2 className="text-xl"> - Escolha os <span className="underline">outros jogadores</span>: </h2>
         
          <div className="checkboxes-container mt-2">
            <div>
              <input className="cursor-pointer" value="-1" type="checkbox" id="otherPlayers" name="otherPlayers" />
              <label htmlFor="otherPlayers"> Todos </label>
            </div>
            <div className="flex gap-x-5 flex-wrap">
              {
                players.map((pl, index) => {
                  return (
                    <div key={index}>
                      <input className="cursor-pointer" type="checkbox" value={index} id={pl.name} name="otherPlayers"/>
                      <label htmlFor="otherPlayers"> {pl.name} </label>
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
              <input className="cursor-pointer" value="-1" type="checkbox" id="params" name="params" />
              <label> Todos </label>
            </div>
            <div className="flex gap-x-5 flex-wrap">
              {
                header.slice(2).map((param, index) => {
                  return (
                    <div key={index}>
                      <input className="cursor-pointer" type="checkbox" value={index} id={param} name="params"/>
                      <label htmlFor="params"> {param} </label>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </section>

        {/* Escolha do Algoritmo  */}
        <section className="my-5">
          <label htmlFor="algId" className="text-xl"> - Escolha o <span className="underline">algoritmo</span>: </label>
          <select id="algId" name="algId" className="p-1 rounded cursor-pointer border border-gray-300">
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