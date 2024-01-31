import { defineCollection, z } from 'astro:content'

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().min(1).max(80),
    tags: z.array(z.string()),
    imageUrl: z.string(),
    canonicalURL: z.string().url().optional()
  })
})

export const collections = { projects }
