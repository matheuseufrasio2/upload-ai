import { FastifyInstance } from "fastify";
import { prismaClient } from "../lib/prisma";

export async function getAllPromptsRoute(app: FastifyInstance) {
  app.get('/prompts', async () => {
    const prompts = await prismaClient.prompt.findMany();
    
    return prompts;
  })
}