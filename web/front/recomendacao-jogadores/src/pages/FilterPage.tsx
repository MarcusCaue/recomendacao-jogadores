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
      <form action="http://localhost:2102/players/filter" method="post" className="container">
        <h2 className="fs-4"> Escolha o jogador Referência </h2>
        {/* Jogador Referência */}
        <select className="form-select form-select-lg mb-3">
          {players.map((pl, index) => <option key={index} value={pl.name}> {pl.name} </option>)}
        </select>

        {/* Outros jogadores a comparar */}
        <section className="otherPlayers">
          <h2 className="fs-4"> Escolha os outros jogadores </h2>
          <div className="d-flex flex-row">
            <div>
              <input className="form-check-input" type="checkbox" value={players.length} id="flexCheckDefault" />
              <label className="form-check-label" htmlFor="flexCheckDefault"> Todos </label>
            </div>
            {
              players.map((pl, index) => {
                return (
                  <div key={index}>
                    <input className="form-check-input" type="checkbox" value={index} id="flexCheckDefault" />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                      {pl.name}
                    </label>
                  </div>
                )
              })
            }
          </div>
        </section>


      </form>
    </>
  )
}