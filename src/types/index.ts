import { z } from 'zod';

/** Auth Users */
export const authSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  password_confirmation: z.string().optional(),
  current_password: z.string().optional(),
  token: z.string().optional(),
});

/** Forms */
type Auth = z.infer<typeof authSchema>;
export type UserLoginForm = Pick<Auth, 'email' | 'password'>;
export type UserRegistrationForm = Pick<Auth, 'name' | 'email' | 'password' | 'password_confirmation'>;

/** Users */
export const userSchema = authSchema.pick({
  name: true,
  email: true,
}).extend({
  id: z.string(),
  phone: z.string().optional(),
  address: z.string().optional(),
  role: z.enum(['admin', 'client']).optional(),
  confirmed: z.boolean().optional(),
});

export type User = z.infer<typeof userSchema>;
export type UserProfileForm = Pick<User, 'name' | 'email'>;

// Server Responses
interface FieldError {
  field?: string;
  message: string;
}

export type ServerErrorResponse = {
  success: false;
  message: string;
  errors: FieldError[];
}
