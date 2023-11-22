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

      <header>
        <h2 className="text-[20pt] font-bold text-center"> Lista de Atacantes </h2>
        <div className="border-black border-t mt-2 w-[55%] mx-auto"/>
      </header>

      <section className="overflow-x-auto">
        <table className="text-center align-middle mt-5">
          <thead>
            <tr className="">
              <th className="border border-black p-5"> # </th>
              {header.map((h, index) => <th className="border border-black whitespace-nowrap p-3" scope="col" key={index}> {h} </th>)}
            </tr>
          </thead>
          <tbody className="">
            {
              players.map((pl, index) => {
                return (
                  <tr className="" key={index}>
                    <th  className="border border-black" scope="col"> {index + 1} </th>
                    <td className="border border-black p-2" > {pl.name} </td>
                    {pl.data.map((d, index) => <td className="border border-black" key={index}> {d} </td>)}
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