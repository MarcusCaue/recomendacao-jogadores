import { Outlet } from "react-router-dom"

export default function App() {
  return (
    <div className="min-h-[100vh] flex justify-center items-center">
      <div className="container">
        <header>
          <h1 className="text-center text-2xl font-bold"> Análise de Jogadores de Futebol </h1>
        </header>

        <main className="">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
