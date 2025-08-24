import { z } from 'zod';

/** Auth Users */
export const authSchema = z.object({
  name: z.string().optional(),
  email: z.email().optional(),
  password: z.string().optional(),
  confirmPassword: z.string().optional(),
  current_password: z.string().optional(),
  token: z.string().optional(),
});

/** Forms */
type Auth = z.infer<typeof authSchema>;
export type LoginForm = Pick<Auth, 'email' | 'password'>;
export type ForgotPasswordForm = Pick<Auth, 'email'>;
export type NewPasswordForm = Pick<Auth, 'password' | 'confirmPassword'>;

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
