import { fastify } from 'fastify';
import { prismaClient } from './lib/prisma';
import { getAllPromptsRoute } from './routes/get-all-prompts';

const app = fastify()

app.register(getAllPromptsRoute);

app.listen({
  port: 3333,
}).then(() => {
  console.log('HTTP Server Running on http://localhost:3333/')
})