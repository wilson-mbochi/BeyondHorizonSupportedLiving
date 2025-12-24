import { z } from 'zod';
import { insertContactSchema, insertJobApplicationSchema, testimonials } from './schema';

export const errorSchemas = {
  validation: z.object({
    message: z.string(),
    field: z.string().optional(),
  }),
  internal: z.object({
    message: z.string(),
  }),
};

export const api = {
  contact: {
    submit: {
      method: 'POST' as const,
      path: '/api/contact',
      input: insertContactSchema,
      responses: {
        201: z.object({ success: z.boolean(), message: z.string() }),
        400: errorSchemas.validation,
      },
    },
  },
  careers: {
    submit: {
      method: 'POST' as const,
      path: '/api/careers',
      input: insertJobApplicationSchema,
      responses: {
        201: z.object({ success: z.boolean(), message: z.string() }),
        400: errorSchemas.validation,
      },
    },
  },
  testimonials: {
    list: {
      method: 'GET' as const,
      path: '/api/testimonials',
      responses: {
        200: z.array(z.custom<typeof testimonials.$inferSelect>()),
      },
    },
  },
};
