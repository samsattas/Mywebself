import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createHashRouter } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import RootLayout from "@/components/root-layout";
import LandingPage from "@/pages/LandingPage";
import About from "@/pages/About";
import Resume from "@/pages/Resume";
import Experience from "@/pages/Experience";
import Contact from "@/pages/Contact";
import "@/index.css";

const router = createHashRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: "about", element: <About /> },
      { path: "resume", element: <Resume /> },
      { path: "xp", element: <Experience /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark">
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
