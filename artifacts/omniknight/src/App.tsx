import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ROUTES } from "@/lib/constants";

import Layout from "@/components/layout/Layout";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import Pricing from "@/pages/Pricing";
import WhyUs from "@/pages/WhyUs";
import LocateUs from "@/pages/LocateUs";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path={ROUTES.HOME} component={Home} />
      <Route path={ROUTES.SERVICES} component={Services} />
      <Route path={ROUTES.PRICING} component={Pricing} />
      <Route path={ROUTES.WHY_US} component={WhyUs} />
      <Route path={ROUTES.LOCATE_US} component={LocateUs} />
      <Route path={ROUTES.CONTACT} component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Layout>
            <Router />
          </Layout>
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
