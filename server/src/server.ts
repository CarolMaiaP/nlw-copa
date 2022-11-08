import Fastify from 'fastify'

async function bootstrap() {
  const fastify = Fastify({
    logger: true,
  })

  fastify.get('/pools/count', () => {
    return { count: 2548373 }
  })

  await fastify.listen({ port: 3333 })
}

bootstrap()