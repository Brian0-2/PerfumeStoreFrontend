interface PaginationProps {
  currentPage: number;
  goToPage: (page: number) => void;
  nextPage: () => void;
  prevPage: () => void;
  meta: {
    last_page: number;
    from: number;
    to: number;
    total: number;
  };
}

export default function Pagination({ currentPage, goToPage, nextPage, prevPage, meta }: PaginationProps) {
  const { last_page, from, to, total } = meta;

  return (
    <div className="flex flex-col items-center gap-4 mt-6 w-full">
      <p className="text-sm text-gray-600 text-center">
        Mostrando {from} - {to} de {total} resultados
      </p>

      <div className="flex items-center gap-2 flex-wrap justify-center">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className={`px-3 py-1 rounded-lg border text-sm ${currentPage === 1
            ? "text-gray-400 border-gray-200 cursor-not-allowed"
            : "hover:bg-gray-100 border-gray-300 cursor-pointer"
            }`}
        >
          Anterior
        </button>

        <div className="hidden md:flex items-center gap-2">
          {[...Array(last_page)].map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToPage(idx + 1)}
              className={`px-3 py-1 rounded-lg border text-sm cursor-pointer ${currentPage === idx + 1
                ? "bg-blue-600 text-white border-blue-600"
                : "hover:bg-gray-100 border-gray-300"
                }`}
            >
              {idx + 1}
            </button>
          ))}
        </div>

        <button
          onClick={nextPage}
          disabled={currentPage === last_page}
          className={`px-3 py-1 rounded-lg border text-sm ${currentPage === last_page
            ? "text-gray-400 border-gray-200 cursor-not-allowed"
            : "hover:bg-gray-100 border-gray-300 cursor-pointer"
            }`}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}
