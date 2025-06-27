import { ToastContainer } from "react-toastify";
import "./App.scss";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import LoginPage from "./pages/LoginPage/LoginPage";
import RecommendedPage from "./pages/HomePage/RecommendedPage";

function App() {
  const isAuthenticated = false;
  return (
    <div className="container">
      <Routes>
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <RecommendedPage />
            </ProtectedRoute>
          }
        />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
