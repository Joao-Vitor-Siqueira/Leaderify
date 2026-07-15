export default function ProfileButton({ userImageUrl, userName }) {
  return (
    <button
      type="button"
      className="cursor-pointer h-12 w-12 group relative flex rounded-full bg-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 transition-all hover:scale-105"
      aria-haspopup="true"
      aria-label="User menu"
    >
      {userImageUrl ? (
        // The Profile Image
        <img
          className="h-12 w-12 rounded-full object-cover border border-slate-200"
          src={userImageUrl}
          alt={userName || "User profile"}
        />
      ) : (
        // Fallback: If no image exists, show an elegant initial or generic avatar
        <div className="h-12 w-12 rounded-full bg-indigo-600 flex items-center justify-center text-white font-semibold text-sm">
          {userName ? userName.charAt(0).toUpperCase() : 'U'}
        </div>
      )}
    </button>
  );
}