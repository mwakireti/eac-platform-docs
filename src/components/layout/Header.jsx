import React from 'react';
import { motion } from "motion/react";

const Header = () => {
  return (
      <div className="bg-linear-to-r from-blue-600 to-purple-600 text-stone-50 p-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl font-bold mb-3">EAC Platform Documentation</h1>
            <p className="text-lg">Complete guide to using the platform</p>
          </motion.div>
        </div>
      </div>
  )
}

export default Header;
