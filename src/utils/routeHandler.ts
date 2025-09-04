import { ROUTES, type RouteKeys } from "@/data/routes";

export function route(key: RouteKeys, params?: Record<string, string | number>): string {
  let path: string = ROUTES[key];

  if (params) {
    Object.keys(params).forEach((param) => {
      path = path.replace(`:${param}`, encodeURIComponent(String(params[param])));
    });
  }

  return path;
}


