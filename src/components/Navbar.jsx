import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ isAuthenticated, username, onLogout }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-800 dark:to-blue-900 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-white font-bold text-xl flex items-center">
            <svg className="h-8 w-8 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="white" />
              <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            React Dashboard
          </Link>
          
          <div className="hidden md:flex items-center space-x-4">
            
            {isAuthenticated ? (
              <div className="flex items-center">
                <div className="hidden md:flex items-center mr-4">
                  <div className="h-8 w-8 rounded-full bg-white text-blue-600 flex items-center justify-center font-bold">
                    {username.charAt(0).toUpperCase()}
                  </div>
                  <span className="text-white ml-2">Hello, {username}</span>
                </div>
                <button
                  onClick={onLogout}
                  className="bg-white text-blue-600 hover:bg-gray-100 px-4 py-2 rounded text-sm font-medium transition-colors duration-200"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/"
                className="bg-white text-blue-600 hover:bg-gray-100 px-4 py-2 rounded text-sm font-medium transition-colors duration-200"
              >
                Login
              </Link>
            )}
          </div>
          
          <div className="md:hidden">
            <button
              type="button"
              className="text-white hover:text-gray-200 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-blue-500">
            <div className="flex items-center justify-between mb-4">
              {isAuthenticated && (
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-white text-blue-600 flex items-center justify-center font-bold">
                    {username.charAt(0).toUpperCase()}
                  </div>
                  <span className="text-white ml-2">Hello, {username}</span>
                </div>
              )}
            </div>
            {isAuthenticated ? (
              <button
                onClick={onLogout}
                className="w-full bg-white text-blue-600 hover:bg-gray-100 px-4 py-2 rounded text-sm font-medium transition-colors duration-200"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/"
                className="block w-full bg-white text-blue-600 hover:bg-gray-100 px-4 py-2 rounded text-sm font-medium text-center transition-colors duration-200"
              >
                Login
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;