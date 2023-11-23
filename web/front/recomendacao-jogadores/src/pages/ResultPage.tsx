import { api } from "../tools/axios"
import { useState, useEffect } from "react"
import { Result } from "../interfaces/Result"

export default function ResultPage() {
  const [ results, setResults ] = useState<Result[]>([])

  useEffect(() => {
    api.get("/players/result").then(res => setResults(res.data))
  }, [])

  return (
    <>
      <header className="my-5">
        <h2 className="text-[20pt] text-center"> Resultados </h2>
        <div className="border-black border-t mt-2 w-[35%] mx-auto"/>
      </header>

      <section className="overflow-x-auto">
        <table className="text-center align-middle mt-5 mx-auto">
          <thead>
            <tr>
              <th className="border border-black p-5"> # </th>
              <th className="border border-black whitespace-nowrap p-3" scope="col"> Jogador Referência </th>
              <th className="border border-black whitespace-nowrap p-3" scope="col"> Jogador Comparado </th>
              <th className="border border-black whitespace-nowrap p-3" scope="col"> Resultado </th>
            </tr>
          </thead>
          <tbody>
            {
              results.map((res, index) => {
                return (
                  <tr key={index}>
                    <th  className="border border-black" scope="col"> {index + 1} </th>
                    <td className="border border-black p-2" > { res.referencePlayer.name } </td>
                    <td className="border border-black p-2" > { res.comparedPlayer.name } </td>
                    <td className="border border-black p-2" > { res.result } </td>
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