import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const jobs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/jobs' }),
  schema: z.object({
    title: z.string(),
    company: z.string(),
    technologies: z.array(z.string()),
    startYear: z.string(),
    endYear: z.string().optional(),
  }),
});
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    technologies: z.array(z.string()),
  }),
});

export const collections = { jobs, projects };