import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

function DashboardSummary({ stats }) {
  const chartCanvasRef = useRef(null);

  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-800 rounded-lg p-6 text-white shadow-lg"
      >
        <div className="flex justify-between items-start">
          <div>
            <p className="text-blue-100 mb-1 text-sm font-medium">Total Users</p>
            <h3 className="text-3xl font-bold">{stats.totalUsers}</h3>
          </div>
          <div className="p-2 bg-white bg-opacity-20 rounded-lg">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
        </div>
        <div className="mt-4 flex items-center text-sm">
          <span className="flex items-center text-green-300">
            <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            5% increase
          </span>
          <span className="ml-2 text-blue-100">from last week</span>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="bg-gradient-to-br from-purple-500 to-purple-600 dark:from-purple-600 dark:to-purple-800 rounded-lg p-6 text-white shadow-lg"
      >
        <div className="flex justify-between items-start">
          <div>
            <p className="text-purple-100 mb-1 text-sm font-medium">Total Posts</p>
            <h3 className="text-3xl font-bold">{stats.totalPosts}</h3>
          </div>
          <div className="p-2 bg-white bg-opacity-20 rounded-lg">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
          </div>
        </div>
        <div className="mt-4 flex items-center text-sm">
          <span className="flex items-center text-green-300">
            <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            12% increase
          </span>
          <span className="ml-2 text-purple-100">from last month</span>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="bg-gradient-to-br from-green-500 to-green-600 dark:from-green-600 dark:to-green-800 rounded-lg p-6 text-white shadow-lg"
      >
        <div className="flex justify-between items-start">
          <div>
            <p className="text-green-100 mb-1 text-sm font-medium">Posts Per User</p>
            <h3 className="text-3xl font-bold">{stats.averagePostsPerUser}</h3>
          </div>
          <div className="p-2 bg-white bg-opacity-20 rounded-lg">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
        </div>
        <div className="mt-4 flex items-center text-sm">
          <span className="flex items-center text-yellow-300">
            <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
            </svg>
            No change
          </span>
          <span className="ml-2 text-green-100">from last week</span>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 col-span-full"
      >
        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Activity Overview</h3>
        <div className="h-64 flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-lg">
          <canvas ref={chartCanvasRef} width="400" height="200"></canvas>
          <div className="text-center text-gray-500 dark:text-gray-400">
            <svg className="h-12 w-12 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default DashboardSummary;