import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/Landing";
import RootLayout from "./pages/RootLayout";
import TentangKamiPage from "./pages/TentangKami";
import LayananPelangganPage from "./pages/LayananPelanggan";
import MediaPage from "./pages/Media";
import KarirPage from "./pages/Karir";
import SPKLUPage from "./pages/SPKLU";
import LoginPage from "./pages/Login";
import HistoryPage from "./pages/History";
import DashboardLayout from "./pages/DashboardLayout";
import DashboardNone from "./pages/DashboardNone";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <LandingPage />,
      },
      {
        path: "/tentang-kami",
        element: <TentangKamiPage />,
      },
      {
        path: "/layanan-pelanggan",
        element: <LayananPelangganPage />,
      },
      {
        path: "/media",
        element: <MediaPage />,
      },
      {
        path: "/karir",
        element: <KarirPage />,
      },
      {
        path: "/spklu",
        element: <SPKLUPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
          {
            path: "history",
            element: <HistoryPage />,
          },
          {
            path: "notification",
            element: <DashboardNone />,
          },
          {
            path: "my-voucher",
            element: <DashboardNone />,
          },
          {
            path: "profile",
            element: <DashboardNone />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
