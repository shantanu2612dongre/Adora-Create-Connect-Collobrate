import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TopSection from "@/components/landing/TopSection";
import LoginPage from "./pages/Login";
import CreatorDashboard from "./pages/creator-dashboard";
import BrandDashboard from "./pages/brand-dashboard";
import process from 'process';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <MainLayout />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

const MainLayout = () => {
  const location = useLocation();

  return (
    <>
      {/* Render TopSection only on landing page */}
      {location.pathname === "/" && <TopSection />}

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/creator-dashboard" element={<CreatorDashboard />} />
        <Route path="/brand-dashboard" element={<BrandDashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;