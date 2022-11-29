import { FastifyInstance } from "fastify"
import { prisma } from "../lib/prisma"

export function guessRoutes(fastify: FastifyInstance){
  fastify.get('/guesses/count', async () => {
    const guess = await prisma.guess.count()
    return { guess }
  })
}