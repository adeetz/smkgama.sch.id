import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiX } from 'react-icons/fi'; // Menggunakan ikon dari react-icons

const NavbarBanner = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isHovered, setIsHovered] = useState(false); // State untuk mendeteksi hover di teks
  const [isBannerHovered, setIsBannerHovered] = useState(false); // State untuk mendeteksi hover di banner

  return (
    isOpen && (
      <motion.div
        className="relative hidden p-3 text-sm font-semibold text-center text-white rounded-b-lg shadow-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 lg:block"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        onMouseEnter={() => setIsBannerHovered(true)}  // Ketika kursor diarahkan ke banner
        onMouseLeave={() => setIsBannerHovered(false)} // Ketika kursor meninggalkan banner
      >
        <motion.div
          className="flex items-center justify-center space-x-4"
          animate={{ x: isBannerHovered ? 0 : [-1000, 1000] }} // Berhenti bergerak saat hover
          transition={{
            repeat: isBannerHovered ? 0 : Infinity, // Berhenti mengulang saat hover
            duration: 15, // Durasi gerakan
            ease: 'linear',
          }}
        >
          <span>Pendaftaran Siswa Baru sudah dibuka, segera daftarkan dirimu!</span>
          <a
            href="#"
            className="px-3 py-1 text-sm font-medium"
            style={{
              backgroundColor: '#ffcf3a', // Warna background tombol
              color: '#000000', // Warna teks tombol menjadi hitam
              borderRadius: '9999px',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={() => setIsHovered(true)} // Ketika kursor diarahkan ke teks
            onMouseLeave={() => setIsHovered(false)} // Ketika kursor meninggalkan teks
          >
            <motion.span
              animate={{ opacity: isHovered ? 1 : [1, 0.5, 1] }} // Teks kelap-kelip berhenti saat hover
              transition={{
                repeat: isHovered ? 0 : Infinity, // Hentikan kelap-kelip saat hover
                duration: 1, // Durasi kelap-kelip
                ease: 'easeInOut',
              }}
            >
              Klik disini!
            </motion.span>
          </a>
        </motion.div>

        <div
          className="absolute text-white transition-all -translate-y-1/2 cursor-pointer top-1/2 right-5 hover:text-gray-200"
          onClick={() => setIsOpen(false)}
        >
          <FiX size={20} />
        </div>
      </motion.div>
    )
  );
};

export default NavbarBanner;
