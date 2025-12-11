import Pagination from "./Pagination";

export default function Postlist({ posts = [], removePost, currentPage, totalPages, goToPage }) {
  console.log("rec post ---", posts);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {Array.isArray(posts) && posts.length > 0 ? (
          posts.map((post) => (
            <div
              key={post.id}
              className="relative bg-white rounded-xl shadow-md p-6 border border-gray-200"
            >
              <button
                onClick={() => removePost(post.id)}
                className="absolute top-3 right-3 text-gray-400 hover:text-red-600"
                aria-label="remove"
              >
                ✕
              </button>

              <h2 className="font-semibold text-lg text-gray-700 mb-2 truncate">
                {post.title}
              </h2>
              <p className="text-gray-600 text-sm">
                {post.body}
              </p>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-12 text-gray-500">No posts to show</div>
        )}
      </div>

      <div className="mt-8">
        <Pagination currentPage={currentPage} totalPages={totalPages} goToPage={goToPage} />
      </div>
    </div>
  );
}
