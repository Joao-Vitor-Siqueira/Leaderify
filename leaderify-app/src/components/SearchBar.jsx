export default function SearchBar({}) {
  return (
    <>
      <div className="w-full max-w-[75%]">
        <div className="relative flex items-center">
            <input
            type="text"
            id="search"
            name="search"
            placeholder="Search leaderboards..."
            className="
                block w-full rounded-lg border border-mauve-500 px-3 py-2 text-white placeholder-slate-400 
                focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-mauve-500 sm:text-sm 
                transition-shadow shadow-sm text-center text-sm"
            />
            <button
            type="button"
            className="absolute right-3 text-slate-400 hover:text-white transition-colors focus:outline-none border rounded-full hover:cursor-pointer"
            aria-label="Clear search input"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
