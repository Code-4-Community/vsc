import { z } from 'zod';

export const eventsWriteSchema = z.object({
  title: z.string().min(1),
  content: z.string().min(1),
  link: z.string().min(1),
  eventStart: z.date(),
  eventEnd: z.date()
});

export type EventsWrite = z.infer<typeof eventsWriteSchema>;