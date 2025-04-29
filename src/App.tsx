
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* BSc Routes */}
          <Route path="/bsc" element={<Index />} />
          <Route path="/bsc/:semesterSlug" element={<Index />} />
          
          {/* MSc Routes */}
          <Route path="/msc" element={<Index />} />
          <Route path="/msc/:semesterSlug" element={<Index />} />
          
          {/* Materials and other routes */}
          <Route path="/materials/:materialId" element={<Index />} />
          <Route path="/about" element={<Index />} />
          <Route path="/contact" element={<Index />} />
          <Route path="/faq" element={<Index />} />
          <Route path="/privacy" element={<Index />} />
          <Route path="/terms" element={<Index />} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
