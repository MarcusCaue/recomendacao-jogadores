import { api } from "../tools/axios"
import { useState, useEffect } from "react"
import { Result } from "../interfaces/Result"

export default function ResultPage() {
  const [ results, setResults ] = useState<Result>()

  useEffect(() => {
    api.get("/players/result").then(res => {
      setResults(res.data)
    })
  }, [])

  console.log(results);
  return (
    <>
      <h1> Página de Resultado </h1>
    </>
  )
}