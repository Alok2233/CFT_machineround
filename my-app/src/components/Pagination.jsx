export default function Pagination({ currentPage = 1, totalPages = 1, goToPage }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center items-center gap-3">
      <button
        onClick={() => goToPage(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="px-3 py-1 rounded-lg border bg-white hover:bg-gray-100 transition disabled:opacity-50"
      >
        prev
      </button>

      <div className="flex gap-2">
        {pages.map((p) => (
          <button
            key={p}
            onClick={() => goToPage(p)}
            className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition ${
              p === currentPage ? "bg-blue-600 text-white shadow" : "bg-white border hover:bg-gray-100"
            }`}
          >
            {p}
          </button>
        ))}
      </div>

      <button
        onClick={() => goToPage(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="px-3 py-1 rounded-lg border bg-white hover:bg-gray-100 transition disabled:opacity-50"
      >
        next
      </button>
    </div>
  );
}
