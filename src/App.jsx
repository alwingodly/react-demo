import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import PageNotFound from "./components/PageNotFound";
import "./App.css";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Check if user was previously logged in
  useEffect(() => {
    const savedAuth = localStorage.getItem("isAuthenticated");
    const savedUsername = localStorage.getItem("username");
    
    if (savedAuth === "true" && savedUsername) {
      setIsAuthenticated(true);
      setUsername(savedUsername);
    }
  }, []);

  const handleLogin = (formUsername) => {
    setIsLoading(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      setIsAuthenticated(true);
      setUsername(formUsername);
      
      // Save to localStorage
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("username", formUsername);
      
      toast.success(`Welcome back, ${formUsername}!`, {
        position: "top-right",
        autoClose: 3000,
      });
      
      setIsLoading(false);
    }, 1000);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername("");
    
    // Clear localStorage
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("username");
    
    toast.info("You have been logged out", {
      position: "top-right",
      autoClose: 3000,
    });
  };

  return (
      <Router>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
          <Navbar 
            isAuthenticated={isAuthenticated} 
            username={username} 
            onLogout={handleLogout} 
          />
          <div className="container mx-auto px-4 py-8">
            <Routes>
              <Route
                path="/"
                element={
                  isAuthenticated ? (
                    <Navigate to="/dashboard" />
                  ) : (
                    <Login onLogin={handleLogin} isLoading={isLoading} />
                  )
                }
              />
              <Route
                path="/dashboard"
                element={
                  isAuthenticated ? (
                    <Dashboard username={username} />
                  ) : (
                    <Navigate to="/" />
                  )
                }
              />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </div>
          <ToastContainer />
        </div>
      </Router>
  );
}

export default App;