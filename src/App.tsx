import { ToastContainer } from "react-toastify";
import "./App.scss";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import RecommendedPage from "./pages/RecommendedPage/RecommendedPage";
import PrivateRoute from "./PrivateRoute";
import { useAppDispatch } from "./redux/store";
import { useSelector } from "react-redux";
import { selectUserIsRefreshing } from "./redux/auth/selectors";
import { useEffect } from "react";
import { refreshUser } from "./redux/auth/operations";

function App() {
  const dispatch = useAppDispatch();
  const isRefreshing = useSelector(selectUserIsRefreshing);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <Routes>
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/recommended"
          element={<PrivateRoute element={<RecommendedPage />} />}
        />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
