import { FastifyInstance } from "fastify";

export async function routes(server: FastifyInstance) {
    server.get("/hello", async () => {
        return {
            message: "Olá mundo!"
        }
    })
}