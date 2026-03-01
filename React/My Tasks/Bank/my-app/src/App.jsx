import React from "react";
import { BankProvider, useBank } from "./context/BankContext";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Deposit from "./pages/Deposit.jsx";
import Withdraw from "./pages/Withdraw.jsx";
import Transactions from "./pages/Transactions.jsx";
import Layout from "./components/Layout.jsx";

const ProtectedRoute = ({ children }) => {
  const { state } = useBank();
  if (!state.account) {
    return <Navigate to="/" replace />;
  }
  return children;
};

const AppRoutes = () => {
  const { state } = useBank();
  return (
    <Routes>
      <Route
        path="/"
        element={
          state.account ? <Navigate to="/dashboard" replace /> : <Home />
        }
      />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Layout>
              <Dashboard />
            </Layout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/deposit"
        element={
          <ProtectedRoute>
            <Layout>
              <Deposit />
            </Layout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/withdraw"
        element={
          <ProtectedRoute>
            <Layout>
              <Withdraw />
            </Layout>
          </ProtectedRoute>
        }
      />

      <Route
        path="/transactions"
        element={
          <ProtectedRoute>
            <Layout>
              <Transactions />
            </Layout>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

const App = () => {
  return (
    <BankProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </BankProvider>
  );
};

export default App;
