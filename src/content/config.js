import { defineCollection } from "astro/content/config";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const posts = defineCollection({
    loader: glob({
        pattern: '**/*.md',
        base: './src/content/posts'
    }),
    schema: z.object({
        titulo: z.string(),
        fecha: z.string(),
        autor: z.string().optional(),
        tags: z.array(z.string()).optional()
    })
})

export const collections = { posts }