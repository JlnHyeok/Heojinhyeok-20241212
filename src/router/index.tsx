import {
  Navigate,
  Outlet,
  ScrollRestoration,
  createBrowserRouter,
} from "react-router-dom";
import { TimeDeal, BrandDeal } from "@/pages";
import { Suspense } from "react";
import { Loading } from "@/components/shared/Loading";

export const webPath = {
  timeDeal: () => "/deals/time-deal",
  brandDeal: () => "/deals/brand-deal",
};

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return children;
};

const Root = () => {
  return (
    <MainLayout>
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
      <ScrollRestoration />
    </MainLayout>
  );
};

const routes = [
  { path: "*", element: <div>404 Not Found</div> },
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Navigate to={webPath.timeDeal()} replace /> },
      { path: webPath.timeDeal(), element: <TimeDeal /> },
      { path: webPath.brandDeal(), element: <BrandDeal /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
