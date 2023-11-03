import Fastify from "fastify"
import cors from "@fastify/cors"
import { routes } from "./routes/routes"

const server = Fastify()
server.register(cors)
server.register(routes)

server.listen({port: 2102}).then(() => console.log("Server running on port 2102"))