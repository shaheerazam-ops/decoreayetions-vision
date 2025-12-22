import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSupabaseAuth } from "@/hooks/useSupabaseAuth";

type ProtectedRouteProps = {
  children: ReactNode;
};

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user, initialLoading } = useSupabaseAuth();
  const location = useLocation();

  if (initialLoading) {
    return <div className="p-8">Checking your session…</div>;
  }

  if (!user) {
    return <Navigate to="/contact" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};


