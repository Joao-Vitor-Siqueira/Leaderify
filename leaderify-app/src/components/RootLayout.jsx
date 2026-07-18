import { Outlet, Link } from "react-router-dom";
import Navbar from "./navigation/Navbar";

export default function RootLayout() {
  return (
    <div className="flex flex-col h-dvh w-full">
      <main className="flex-1 overflow-hidden max-h-11/12">
        <Outlet />
      </main>
      <Navbar />
    </div>
  );
}