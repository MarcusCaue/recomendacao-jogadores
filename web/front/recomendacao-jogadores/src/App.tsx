import axios from "axios"
import { useEffect, useState } from "react"

const api = axios.create({
  baseURL: "http://localhost:2102/"
})

interface Player {
  name: string
  team: string
  data: number[]
}

export default function App() {
  const [players, setPlayers] = useState<Player[]>([])

  useEffect(() => {
    api.get("/players").then(result => setPlayers(result.data))
  }, [])

  return (
    <div className="min-vh-100">
      <div className="container pt-4">
        
        <header>
          <h1 className="text-center"> Análise de Jogadores de Futebol </h1>
        </header>

        <main>
          <p className="text-center p-3 fs-5"> Clique <a href="#">aqui</a> para aplicar os filtros. </p>

          <section className="players-table">
            <ul>
              {
                players.map((pl, index) => {
                  return (
                    <li key={index}> <strong>{pl.name}</strong> é do {pl.team} </li>
                  )
                })
              }
            </ul>
          </section>
        </main>
      </div>
    </div>
  )
}
