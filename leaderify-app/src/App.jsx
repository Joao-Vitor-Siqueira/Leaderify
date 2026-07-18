import RootLayout from "./components/RootLayout";
import HomePage from "./pages/Home";
import LeaderboardDetails from "./pages/LeaderboardDetails";
import LeaderBoards from "./pages/Leaderboards";
import LoginPage from "./pages/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, 
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/leaderboards", element: <LeaderBoards /> },
      { path: "/leaderboardDetails", element: <LeaderboardDetails/>}
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
      <div className="absolute inset-0 h-dvh w-full bg-mauve-900 -z-50">
      </div>
      <RouterProvider router={router} />
    </>
  );
}
export default App;
