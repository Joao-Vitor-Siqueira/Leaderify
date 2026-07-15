import { Outlet, Link } from "react-router-dom";
import Navbar from "./navigation/Navbar";

export default function RootLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
