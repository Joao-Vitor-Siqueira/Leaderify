import RootLayout from "./components/RootLayout";
import HomePage from "./pages/Home";
import LeaderBoards from "./pages/Leaderboards";
import LoginPage from "./pages/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, // This wraps your sub-pages
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/leaderboards", element: <LeaderBoards /> },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

function App() {
  return (
    <>
      <div className="absolute w-full min-h-screen flex items-center justify-center bg-mauve-900">
        <RouterProvider router={router} />
      </div>
    </>
  );
}
export default App;
