import { FastifyInstance } from "fastify"
import { prisma } from "../lib/prisma"

export function poolRoutes(fastify: FastifyInstance){
  fastify.get('/pools/count', async () => {
    const pool = await prisma.pool.count()
    return { pool }
  })
}