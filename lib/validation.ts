import { z } from 'zod';

export const inquirySchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().optional(),
  weddingDate: z.string().optional(),
  guestCount: z.string().optional(),
  venue: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(10, 'Please tell us a bit more about your celebration')
});

export type InquiryInput = z.infer<typeof inquirySchema>;
