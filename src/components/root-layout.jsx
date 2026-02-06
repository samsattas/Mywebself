import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import { TooltipProvider } from "@/components/ui/tooltip";

export default function RootLayout() {
  const location = useLocation();

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-background">
        <Navbar />
        <AnimatePresence mode="wait">
          <main key={location.pathname} className="pt-16">
            <Outlet />
          </main>
        </AnimatePresence>
      </div>
    </TooltipProvider>
  );
}
