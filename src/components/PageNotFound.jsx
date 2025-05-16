import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function PageNotFound() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-center py-16 px-4"
    >
      <div className="max-w-lg mx-auto">
        <h1 className="text-9xl font-bold text-blue-500">404</h1>
        <h2 className="text-6xl font-bold text-gray-800 dark:text-white mt-4">Oops!</h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 mt-6">The page you're looking for doesn't exist.</p>
        <div className="mt-10">
          <Link 
            to="/" 
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors duration-200 inline-flex items-center"
          >
            <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Go back home
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default PageNotFound;