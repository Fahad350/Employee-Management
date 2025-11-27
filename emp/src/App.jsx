import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";

// 🧠 Pages
import LoginPage from "./pages/LoginPage";
import AdminProfile from "./pages/AdminProfile";
import Dashboard from "./pages/Dashboard";
import Attendance from "./pages/Attendance";
import Asset from "./pages/Asset";

import History from "./pages/History";
import { ToastContainer } from "react-toastify";
import EditProfile from "./pages/EditProfile";

export default function App() {
  return (
    <>
      <ToastContainer position="top-center" autoClose={2000} />
      <Routes>
        {/* Public route (no sidebar) */}
        <Route path="/login" element={<LoginPage />} />

        {/* Protected routes (inside layout) */}
        {/* <Route element={<ProtectedRoute />}> */}
        {/*  Layout as parent route */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="attendance" element={<Attendance />} />
          <Route path="profile" element={<AdminProfile />} />

          <Route path="asset" element={<Asset />} />
          <Route path="history" element={<History />} />
          <Route path="edit-profile" element={<EditProfile />} />
        </Route>

        {/* </Route> */}

        {/* 404 fallback */}
        <Route
          path="*"
          element={
            <div className="min-h-screen flex items-center justify-center bg-slate-50 text-slate-600 text-lg font-medium">
              404 – Page Not Found
            </div>
          }
        />
      </Routes>
    </>
  );
}
