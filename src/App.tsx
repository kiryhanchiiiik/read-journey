import { ToastContainer } from "react-toastify";
import "./App.scss";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";

function App() {
  return (
    <div className="container">
      <RegistrationPage />
      <ToastContainer />
    </div>
  );
}

export default App;
