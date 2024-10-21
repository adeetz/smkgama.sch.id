import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ResponsiveMenu = ({ isOpen, toggleMenu }) => {
  const menuItems = [
    { name: 'Home' },
    { name: 'Program Keahlian' },
    { name: 'Visi Misi' },
    { name: 'Kegiatan Siswa' },
  ];

  const menuVariants = {
    closed: { opacity: 0, y: -20 },
    open: { opacity: 1, y: 0 },
  };

  const itemVariants = {
    closed: { x: -20, opacity: 0 },
    open: { x: 0, opacity: 1 },
  };

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div 
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed left-0 right-0 z-40 mx-4 bg-teal-600 shadow-lg lg:hidden"
          style={{ top: '74px' }} // Increased top value to accommodate rounded corners
        >
          <div className="overflow-hidden rounded-lg">
            <div className="container px-4 py-4 mx-auto">
              <nav>
                <ul className="space-y-2">
                  {menuItems.map((item, index) => (
                    <motion.li 
                      key={item.name}
                      variants={itemVariants}
                      transition={{ delay: index * 0.1 }}
                    >
                      <a 
                        href="#" 
                        className="block px-4 py-2 text-lg font-medium text-white transition-colors duration-200 rounded-md hover:bg-teal-500"
                        onClick={toggleMenu}
                      >
                        {item.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;