import { useSelector } from "react-redux";
import {
  selectUserIsLoggedIn,
  selectUserIsRefreshing,
} from "./redux/auth/selectors";
import { Navigate } from "react-router-dom";
import type { ReactElement } from "react";

interface PrivateRouteProps {
  element: ReactElement;
  redirectTo?: string;
}

const PrivateRoute = ({
  element,
  redirectTo = "/login",
}: PrivateRouteProps) => {
  const isLoggedIn = useSelector(selectUserIsLoggedIn);
  const isRefreshing = useSelector(selectUserIsRefreshing);

  if (isRefreshing) {
    return <div>Loading...</div>;
  }

  return isLoggedIn ? element : <Navigate to={redirectTo} replace />;
};

export default PrivateRoute;
