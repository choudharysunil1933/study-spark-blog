
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
          <Route path="/bsc/:semesterSlug/:subjectSlug" element={<Index />} />
          
          {/* MSc Routes */}
          <Route path="/msc" element={<Index />} />
          <Route path="/msc/:departmentSlug" element={<Index />} />
          <Route path="/msc/:departmentSlug/:subjectSlug" element={<Index />} />
          
          {/* Agricultural Information Routes */}
          <Route path="/exams" element={<Index />} />
          <Route path="/exams/:examId" element={<Index />} />
          <Route path="/vacancies" element={<Index />} />
          <Route path="/vacancies/:vacancyId" element={<Index />} />
          <Route path="/updates" element={<Index />} />
          <Route path="/updates/:updateId" element={<Index />} />
          <Route path="/jrf-srf" element={<Index />} />
          <Route path="/jrf-srf/:examId" element={<Index />} />
          <Route path="/videos" element={<Index />} />
          <Route path="/videos/:videoId" element={<Index />} />
          
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
