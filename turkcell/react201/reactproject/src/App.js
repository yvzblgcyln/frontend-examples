import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/Dashboard/Contact/index";
import Menu from "./pages/Dashboard/Menu";
import User from "./pages/Dashboard/Users";
import UserDetail from "./pages/Dashboard/UserDetail";
import Login from "./pages/Auth/Login";
import DashboardLayout from "./layouts/Dashboard";
import AuthLayout from "./layouts/Auth";
import Register from "./pages/Auth/Register";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Menu />} />
          <Route path="contact" element={<Contact />} />
          <Route path="users" element={<User />} />
          <Route path="users/:id" element={<UserDetail />} />
        </Route>
        <Route path="auth" element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
