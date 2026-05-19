import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { boolean, string, z } from 'zod';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const loginSchema = z.object({
  email: z.string('Email is required').min(3).email('Email is required'),
  password: z
    .string()
    .min(8, 'Minimum 8 characters')
    .max(16, 'Maximum 16 characters'),
});

export const createCommunitySchema = z.object({
  communityName: z.string('Community Name is required').min(3).max(16),
  isAppRequired: z.boolean(),
  pricingAccess: z.enum(['free', 'one-time', 'monthly']),
});
