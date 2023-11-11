import { Outlet } from "react-router-dom"

export default function App() {
  return (
    <div className="min-h-[100vh] flex justify-center items-center">
      <div className="container">
        <header className="">
          <h1 className="text-center text-3xl font-bold"> Análise de Jogadores de Futebol </h1>
        </header>

        <main className="max-w-[85vw] mx-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
