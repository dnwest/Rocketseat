import { FastifyInstance } from 'fastify'
import { prisma } from '../lib/prims'

export async function memoriesRoutes(app: FastifyInstance) {
  app.get('/users', async () => {
    const users = await prisma.user.findMany()
    return users
  })
}
