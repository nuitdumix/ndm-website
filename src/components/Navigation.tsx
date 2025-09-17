import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'HOME', href: '#home' },
    { label: 'EVENTS', href: '#events' },
    { label: 'NETWORK', href: '#newsletter' },
    { label: 'CONTACT', href: '#contact' }
  ]

  return (
    <nav className="fixed top-16 right-4 z-50">
      {/* Menu Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-ndm-pink text-black font-mono font-bold p-3 border-4 border-white brutalist-border"
      >
        {isOpen ? 'CLOSE' : 'MENU'}
      </motion.button>

      {/* Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full right-0 mt-2 bg-black border-4 border-ndm-green min-w-[200px]"
          >
            {/* Terminal Header */}
            <div className="p-3 border-b border-ndm-green">
              <div className="font-mono text-ndm-green text-xs">
                root@ndm:~/nav$ ls -la
              </div>
            </div>

            {/* Navigation Items */}
            <div className="p-2">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  onClick={() => setIsOpen(false)}
                  className="block font-mono text-white hover:text-ndm-pink hover:bg-ndm-dark p-3 transition-all duration-200 border-b border-gray-800 last:border-b-0"
                >
                  → {item.label}
                </motion.a>
              ))}
            </div>

            {/* Terminal Footer */}
            <div className="p-3 border-t border-ndm-green">
              <div className="font-mono text-ndm-green text-xs">
                {navItems.length} items found
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navigation
