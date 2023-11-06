import { Outlet } from "react-router-dom"

export default function App() {
  return (
    <div className="min-vh-100">
      <div className="pt-4">
        
        <header>
          <h1 className="text-center"> Análise de Jogadores de Futebol </h1>
        </header>

        <main className="d-flex justify-content-center flex-column">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
