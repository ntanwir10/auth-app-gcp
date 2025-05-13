import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { useState } from "react";
import { config } from "./config";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <GoogleOAuthProvider clientId={config.googleClientId}>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Routes>
            <Route
              path="/"
              element={
                isAuthenticated ? (
                  <Navigate to="/dashboard" replace />
                ) : (
                  <Login setIsAuthenticated={setIsAuthenticated} />
                )
              }
            />
            <Route
              path="/dashboard"
              element={
                isAuthenticated ? (
                  <Dashboard setIsAuthenticated={setIsAuthenticated} />
                ) : (
                  <Navigate to="/" replace />
                )
              }
            />
          </Routes>
        </div>
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
