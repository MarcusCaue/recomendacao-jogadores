import { api } from "../tools/axios"
import { Player } from "../interfaces/Player"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Main() {
  const [players, setPlayers] = useState<Player[]>([])
  const [header, setHeader] = useState<string[]>([])

  useEffect(() => {
    api.get("/players/header").then(result => setHeader(result.data))
    api.get("/players").then(result => setPlayers(result.data))
  }, [])

  return (
    <>
      <p className="text-center my-5 text-xl"> 
        Clique <Link className="underline hover:text-green-600" to="/players/filter">aqui</Link> para aplicar os filtros. 
      </p>

      <section className="overflow-x-auto">
        <h2 className="text-xl font-bold text-center"> Lista da base de Jogadores Atacantes </h2>
        <hr className="text-red-700"/>
        <table className="">
          <thead>
            <tr className="">
              <th> # </th>
              {header.map((h, index) => <th scope="col" key={index}> {h} </th>)}
            </tr>
          </thead>
          <tbody className="">
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