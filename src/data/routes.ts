
export const ROUTES = {
  // Public routes
  HOME: "/",
  LOGIN: "/auth/login",
  FORGOT_PASSWORD: "/auth/forgot-password",
  NEW_PASSWORD: "/auth/new-password/:token",

  // Protected routes

  // Admin routes
  ADMIN_DASHBOARD: "/protected/admin",

  // Customer routes
  CUSTOMER_DASHBOARD: "/protected/customer/dashboard",
  CUSTOMER_ORDERS: "/protected/customer/orders",
  CUSTOMER_PAYMENTS: "/protected/customer/payments",
  CUSTOMER_PROFILE: "/protected/customer/profile",
} as const;

export type RouteKeys = keyof typeof ROUTES;