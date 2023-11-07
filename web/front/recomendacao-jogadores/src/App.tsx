import { Outlet } from "react-router-dom"

export default function App() {
  return (
    <div className="min-vh-100 d-flex justify-content-center">
      <div className="pt-4 col-12">
        <header>
          <h1 className="text-center"> Análise de Jogadores de Futebol </h1>
        </header>

        <main className="">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
