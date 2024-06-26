import { Route, Routes } from "react-router-dom";
import { LandingLayout } from "./container/Landing/layout";
import { Home } from "./container/Landing/Home";

import { UserForm } from "./container/Login";
import { LoginLayout } from "./container/Login/layout";
import { AdminLayout } from "./container/Admin/layout";
import { Dashboard } from "./container/Admin/Dashboard";
import { Users } from "./container/Admin/Users";

/* Landing Page Layout */
export const LandingRoute = () => {
  return (
    <Routes>
      <Route exact path="/" element={<LandingLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
};

/* Login Layout */
export const LoginRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginLayout />}>
        <Route path="user-registration" element={<UserForm />} />
      </Route>
    </Routes>
  );
};

/* Admin Layout */
export const AdminRoutes = ()=>{
  return (
    <Routes>
      <Route path="/admin" element={<AdminLayout/>} >
        <Route path="dashboard" element={<Dashboard/>} />
        <Route path="Users" element={<Users/>} />
      </Route>
    </Routes>
  )
}
