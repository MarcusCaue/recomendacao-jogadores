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

export default function Main() {
  const [players, setPlayers] = useState<Player[]>([])
  const [header, setHeader] = useState<string[]>([])

  useEffect(() => {
    api.get("/players/header").then(result => setHeader(result.data))
    api.get("/players").then(result => setPlayers(result.data))
  }, [])

  return (
    <>
      <p className="text-center p-3 fs-5"> Clique <a href="#">aqui</a> para aplicar os filtros. </p>

      <section className="players-table">
        <table className="table table-dark table-striped table-bordered rounded-2 text-center align-middle">
          <thead>
            <tr className="align-middle">
              <th> # </th>
              {header.map((h, index) => <th scope="col" key={index}> {h} </th>)}
            </tr>
          </thead>
          <tbody className="table-hover">
            {
              players.map((pl, index) => {
                return (
                  <tr className="" key={index}>
                    <th scope="col"> {index + 1} </th>
                    <td> {pl.name} </td>
                    <td> {pl.team} </td>
                    {pl.data.map((d, index) => <td key={index}> {d} </td>)}
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </section>
    </>
  )
}