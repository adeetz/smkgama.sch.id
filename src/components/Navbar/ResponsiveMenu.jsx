import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ResponsiveMenu = ({ isOpen }) => {
  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -100 }} 
          animate={{ opacity: 1, y: 0 }} 
          exit={{ opacity: 0, y: -100 }} 
          transition={{ duration: 0.3 }}
          className="absolute left-0 z-20 w-full h-screen top-20 lg:hidden"
        >
          <div className="py-6 text-xl font-semibold text-white uppercase bg-primary rounded-3xl">
            <ul className="flex flex-col items-center justify-center">
              <li className="py-2">Home</li>
              <li className="py-2">Program Keahlian</li>
              <li className="py-2">Visi Misi</li>
              <li className="py-2">Kegiatan Siswa</li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
