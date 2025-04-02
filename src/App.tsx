
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import GettingStarted from "./pages/GettingStarted";
import Playground from "./pages/Playground";
import Queries from "./pages/Queries";
import Mutations from "./pages/Mutations";
import Types from "./pages/Types";
import Auth from "./pages/Auth";
import Examples from "./pages/Examples";
import SDKs from "./pages/SDKs";
import CORS from "./pages/CORS";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/getting-started" element={<GettingStarted />} />
          <Route path="/playground" element={<Playground />} />
          <Route path="/queries" element={<Queries />} />
          <Route path="/mutations" element={<Mutations />} />
          <Route path="/types" element={<Types />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/examples" element={<Examples />} />
          <Route path="/sdks" element={<SDKs />} />
          <Route path="/cors" element={<CORS />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
