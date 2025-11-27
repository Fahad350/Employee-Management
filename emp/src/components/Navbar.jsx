import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, UserPlus2 } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    "Overview",
    "Compensation",
    "Emergency",
    "Turn Off",
    "Performance",
    "Files",
  ];

  return (
    <header className="backdrop-blur-lg bg-white/70 shadow-md border-b border-gray-200 sticky top-0 z-50">
      {/* Top Bar */}
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo / Title */}
        <motion.h1
          className="text-2xl font-semibold text-gray-800 tracking-tight"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          👤 Employee Profile
        </motion.h1>

        {/* Desktop Button */}
        <div className="hidden sm:block">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 cursor-pointer rounded-lg shadow hover:shadow-lg transition-all"
          >
            <UserPlus2 size={18} />
            GIZMO
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden text-gray-800 focus:outline-none"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Navigation Links */}
      <AnimatePresence>
        {(menuOpen || window.innerWidth >= 640) && (
          <motion.nav
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="bg-gradient-to-r from-gray-50 to-gray-100 sm:flex sm:items-center sm:justify-between sm:px-6 border-t sm:border-t-0"
          >
            <div className="flex flex-col sm:flex-row sm:space-x-8 px-6 py-4 text-gray-600 font-medium text-sm">
              {navItems.map((item) => (
                <motion.p
                  key={item}
                  whileHover={{ color: "#111827", scale: 1.05 }}
                  className="cursor-pointer py-2 sm:py-0 hover:text-gray-900 transition-colors"
                >
                  {item}
                </motion.p>
              ))}
            </div>

            {/* Mobile Add Button */}
            <div className="sm:hidden px-6 pb-4">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-2 rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                <UserPlus2 size={18} />
                Add Employee
              </motion.button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
