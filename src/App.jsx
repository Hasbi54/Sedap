import './assets/tailwind.css';
import { Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from 'react';

import error404 from './assets/errors/error-404.svg';
import error401 from './assets/errors/error-401.svg';
import error403 from './assets/errors/error-403.svg';
import Loading from './components/Loading';

// Layouts
const MainLayot = lazy(() => import('./layouts/MainLayout'));  // TIDAK DIUBAH
const AuthLayout = lazy(() => import('./layouts/AuthLayout'));
import GuestLayout from './layouts/GuestLayout';

// Pages
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Orders = lazy(() => import('./pages/Order'));
const Customers = lazy(() => import('./pages/Customer'));
const Login = lazy(() => import('./pages/auth/Login'));
const Register = lazy(() => import('./pages/auth/Register'));
const Forgot = lazy(() => import('./pages/auth/Forgot'));
const ErrorPage = lazy(() => import('./pages/ErrorPage'));
const UserList = lazy(() => import('./pages/User'));
const Products = lazy(() => import('./pages/produks'));
const ProductDetail = lazy(() => import('./pages/ProductDetail')); // ✅ Dynamic route detail
import GuestPage from './pages/GuestPage';
import CekStok from './pages/guest/CekStok';

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>

        {/* Auth Routes */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<Forgot />} />
        </Route>

        {/* Main App Routes */}
        <Route element={<MainLayot />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/products" element={<Products />} />  {/* ✅ Products list */}
          <Route path="/products/:id" element={<ProductDetail />} /> {/* ✅ Detail product */}

          {/* Error Routes */}
          <Route path="/error/401" element={<ErrorPage code="401" message="Unauthorized" image={error401} />} />
          <Route path="/error/403" element={<ErrorPage code="403" message="Forbidden" image={error403} />} />
          <Route path="*" element={<ErrorPage code="404" message="Page Not Found" image={error404} />} />
        </Route>

        {/* Guest Routes */}
        <Route path="/guest" element={<GuestLayout><GuestPage /></GuestLayout>} />
        <Route path="/cek-stok" element={<GuestLayout><CekStok /></GuestLayout>} />

      </Routes>
    </Suspense>
  );
}

export default App;
