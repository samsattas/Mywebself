import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import App from "@/App";
import "@/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark">
      <TooltipProvider>
        <div className="min-h-screen bg-background">
          <Navbar />
          <main className="pt-14">
            <App />
          </main>
        </div>
      </TooltipProvider>
    </ThemeProvider>
  </React.StrictMode>
);
