import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiX } from 'react-icons/fi';

const NavbarBanner = ({ navbarHeight }) => {
    const [isOpen, setIsOpen] = useState(true);
    const [isSticky, setIsSticky] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isBannerHovered, setIsBannerHovered] = useState(false);
    const bannerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (bannerRef.current) {
                const bannerTop = bannerRef.current.getBoundingClientRect().top;
                setIsSticky(bannerTop <= navbarHeight);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [navbarHeight]);

    if (!isOpen) return null;

    return (
        <>
            <div ref={bannerRef} style={{ height: isSticky ? '0px' : 'auto' }} />
            <motion.div 
                className={`w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 ${
                    isSticky ? 'fixed top-0 left-0 right-0 z-40' : 'relative'
                }`}
                style={{ top: isSticky ? `${navbarHeight}px` : '0' }}
                initial={false}
                animate={{ y: isSticky ? 0 : -navbarHeight }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
                <div className="relative p-3 text-sm font-semibold text-center text-white sm:p-4 sm:text-base">
                    <motion.div 
                        className="flex flex-col items-center justify-center space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4"
                        animate={{ x: isBannerHovered ? 0 : [-1000, 1000] }}
                        transition={{ repeat: isBannerHovered ? 0 : Infinity, duration: 15, ease: 'linear' }}
                        onMouseEnter={() => setIsBannerHovered(true)}
                        onMouseLeave={() => setIsBannerHovered(false)}
                    >
                        <span className="text-center sm:text-left">Pendaftaran Siswa Baru sudah dibuka, segera daftarkan dirimu!</span>
                        <a 
                            href="https://ppdb.smkgama.sch.id/daftarsiswa"
                            className="inline-block px-4 py-2 text-sm font-medium sm:text-base"
                            style={{ 
                                backgroundColor: '#ffcf3a', 
                                color: '#000000', 
                                borderRadius: '9999px', 
                                transition: 'all 0.3s ease',
                            }}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <motion.span
                                animate={{ opacity: isHovered ? 1 : [1, 0.5, 1] }}
                                transition={{ repeat: isHovered ? 0 : Infinity, duration: 3, ease: 'easeInOut' }}
                            >
                                Klik disini!
                            </motion.span>
                        </a>
                    </motion.div>
                    <div 
                        className="absolute text-white transition-all -translate-y-1/2 cursor-pointer top-1/2 right-3 sm:right-5 hover:text-gray-200"
                        onClick={() => setIsOpen(false)}
                    >
                        <FiX size={20} className="sm:w-6 sm:h-6" />
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default NavbarBanner;