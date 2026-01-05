import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login-page";
import RegisterPage from "./pages/register-page";
import DashboardPage from "./pages/dashboard-page";
import NotFound from "./pages/not-found-page";

function App() {
  return (
    <Routes>
      <Route path="/" Component={LoginPage} />
      <Route path="/register" Component={RegisterPage} />
      <Route path="/dashboard" Component={DashboardPage} />
      {/* 404 */}
      <Route path="*" Component={NotFound} />
    </Routes>
  );
}

export default App;
