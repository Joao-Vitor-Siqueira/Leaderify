import ProfileButton from "./buttons/ProfileButton";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const HamburgerButton = () => {
    return (
      <button
        type="button"
        className="cursor-pointer p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-12 w-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
    );
  };

  return (
    <div
      className={`fixed bottom-0 left-0 w-screen bg-zinc-50 border-t border-zinc-200 p-4 font-sans text-zinc-800 
        transition-all duration-300 ease-in-out
        ${isOpen ? "h-1/3" : "h-1/12"} 
        `}
    >
      <div className = {`flex justify-between w-full  ${isOpen ? "" : "items-center h-full"}`}>
        <HamburgerButton />
        <ProfileButton/>
      </div>
    </div>
  );
}
