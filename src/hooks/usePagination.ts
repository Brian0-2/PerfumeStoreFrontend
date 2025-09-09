import { useSearchParams as useRouterSearchParams } from "react-router-dom";

type QueryParams = Record<string, string | number | undefined>;

export function usePagination(defaults: QueryParams = {}) {
  const [routerSearchParams, setRouterSearchParams] = useRouterSearchParams();

  // Obtener parámetros actuales o defaults
  const getParam = (key: string, fallback?: string) =>
    routerSearchParams.get(key) || defaults[key]?.toString() || fallback;

  const page = Number(getParam("page", "1"));
  const perPage = Number(getParam("perPage", "10"));

  // ✅ Actualizar parámetros en la URL (manteniendo los existentes)
  const setParams = (params: QueryParams) => {
    const newParams = new URLSearchParams(routerSearchParams);

    Object.entries(params).forEach(([key, value]) => {
      if (value === undefined || value === null || value === "") {
        newParams.delete(key);
      } else {
        newParams.set(key, String(value));
      }
    });

    setRouterSearchParams(newParams);
  };

  // ✅ Funciones de paginación
  const goToPage = (page: number) => setParams({ page });
  const nextPage = () => setParams({ page: page + 1 });
  const prevPage = () => setParams({ page: Math.max(1, page - 1) });

  // ✅ Manejo de filtros dinámicos
  const setFilter = (filter: QueryParams) => setParams(filter);
  const resetFilters = () => setRouterSearchParams({ page: "1" });

  return {
    page,
    perPage,
    params: Object.fromEntries(routerSearchParams), // 👈 ya listo como objeto
    goToPage,
    nextPage,
    prevPage,
    setFilter,
    resetFilters,
  };
}
