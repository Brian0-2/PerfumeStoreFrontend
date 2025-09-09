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
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export type User = z.infer<typeof userSchema>;
export type UserProfileForm = Pick<User, 'name' | 'email'>;

//ORDERS

export const orderStatusSchema = z.object({
  id: z.number().int().optional(),
  name: z.string().optional(),
});

export type OrderStatus = z.infer<typeof orderStatusSchema>;

// -------------------------
// Order (orders)
// -------------------------
export const orderSchema = z.object({
  id: z.number().int(),
  is_paid: z.boolean(),
  total: z.string(),
  amount_paid: z.string(),
  user_id: z.number().int().optional(),
  order_status: orderStatusSchema,
  createdAt: z.iso.datetime(),
  updatedAt: z.iso.datetime(),
});

export type Order = z.infer<typeof orderSchema>;

// -------------------------
// OrderItem (order_items)
// -------------------------
export const orderItemSchema = z.object({
  id: z.number().int(),
  quantity: z.number().int(),
  price_buy: z.string(),
  price_sell: z.string(),
  to_earn: z.string(),
  order_id: z.number().int(),
  perfume_id: z.number().int(),
});

export type OrderItem = z.infer<typeof orderItemSchema>;

// -------------------------
// Meta (pagination)
// -------------------------
export const metaSchema = z.object({
  total: z.number(),
  per_page: z.number(),
  current_page: z.number(),
  last_page: z.number(),
  from: z.number(),
  to: z.number(),
});

export type Meta = z.infer<typeof metaSchema>;

// -------------------------
// Respuesta paginada
// -------------------------
export const paginatedOrdersSchema = z.object({
  data: z.array(orderSchema),
  meta: metaSchema,
});

export type PaginatedOrdersResponse = z.infer<typeof paginatedOrdersSchema>;

// PERFUMES
export const brandSchema = z.object({
  id: z.number().int().optional(),
  name: z.string().optional(),
});
export type Brand = z.infer<typeof brandSchema>;

// -------------------------
// FraganceType
// -------------------------
export const fraganceTypeSchema = z.object({
  id: z.number().int().optional(),
  name: z.string().optional(),
});
export type FraganceType = z.infer<typeof fraganceTypeSchema>;

// -------------------------
// Supplier
// -------------------------
export const supplierSchema = z.object({
  id: z.number().int().optional(),
  name: z.string().optional(),
});
export type Supplier = z.infer<typeof supplierSchema>;

// -------------------------
// Category
// -------------------------
export const categorySchema = z.object({
  id: z.number().int().optional(),
  name: z.string().optional(),
});
export type Category = z.infer<typeof categorySchema>;

// -------------------------
// Perfume
// -------------------------
export const perfumeSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  description: z.string().nullable().optional(),
  size: z.string().nullable().optional(),
  image_url: z.string().nullable().optional(),
  image_id: z.string().nullable().optional(),
  brand: brandSchema.optional(),
  fraganceType: fraganceTypeSchema.optional(),
  supplier: supplierSchema.optional(),
  category: categorySchema.optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export type Perfume = z.infer<typeof perfumeSchema>;

export const orderItemWithPerfumeSchema = z.object({
  quantity: z.number().int(),
  price_sell: z.string(),
  perfume: perfumeSchema,
});

export type OrderItemWithPerfume = z.infer<typeof orderItemWithPerfumeSchema>;

export const orderWithItemsSchema = z.object({
  id: z.number().int(),
  is_paid: z.boolean(),
  total: z.string(),
  amount_paid: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  order_status: orderStatusSchema,
  order_items: z.array(orderItemWithPerfumeSchema),
});

export type OrderWithItems = z.infer<typeof orderWithItemsSchema>;

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
