import { z } from 'zod';

export const LoginFormSchema = z.object({
  email: z.string().describe('Email').email('Invalid email'),
  password: z.string().describe('Password').min(1, 'Password is required'),
});

export type LoginFormFields = z.infer<typeof LoginFormSchema>;

export const SignUpFormSchema = z
  .object({
    email: z.string().describe('Email').email('Invalid email'),
    password: z
      .string()
      .describe('Password')
      .min(6, 'Password must be at least 6 characters'),
    confirmPassword: z
      .string()
      .describe('Confirm Password')
      .min(6, 'Password must be at least 6 characters'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export type SignUpFormFields = z.infer<typeof SignUpFormSchema>;
