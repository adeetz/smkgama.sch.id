import React, { useState, useEffect } from 'react';
import { NavbarMenu } from '../../mockData/data.js';
import { MdMenu } from 'react-icons/md';
import { motion } from 'framer-motion';
import ResponsiveMenu from './ResponsiveMenu.jsx';
import logo from '../../assets/logo30.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [navbarHeight, setNavbarHeight] = useState(0);

    useEffect(() => {
        const navbar = document.getElementById('main-navbar');
        if (navbar) {
            setNavbarHeight(navbar.offsetHeight);
        }

        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > navbarHeight) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [navbarHeight]);

    return (
        <>
            <nav
                id="main-navbar"
                className={`w-full transition-all duration-300 ${
                    scrolled 
                        ? 'fixed top-0 left-0 right-0 z-50 bg-white shadow-md' 
                        : 'relative bg-transparent'
                }`}
            >
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <div className='container flex items-center justify-between py-6'>
                        {/* Logo Section */}
                        <div className='flex items-center gap-2 font-bold text-1xl'>
                            <img src={logo} alt="Logo SMK GAMA" className="h-10" />
                            <p className={scrolled ? 'text-gray-800' : 'text-gray-800'}>SMK Garuda Mahadhika</p>
                        </div>

                        {/* Menu Section */}
                        <div className="hidden lg:block">
                            <ul className="flex items-center gap-6">
                                {NavbarMenu.map((item) => (
                                    <li key={item.id}>
                                        <a
                                            href={item.link}
                                            className={`inline-block px-2 py-1 text-sm font-semibold transition-all duration-300 xl:text-base xl:px-3 hover:text-secondary ${
                                                scrolled ? 'text-gray-600' : 'text-gray-600'
                                            }`}
                                        >
                                            {item.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* CTA Button Section */}
                        <div className="hidden space-x-6 lg:block">
                        <a href="https://ppdb.smkgama.sch.id/daftarsiswa">
                            <button className="px-6 py-2 font-semibold text-white transition-all duration-300 rounded-full bg-secondary hover:bg-opacity-90">
                                DAFTAR
                            </button>
                        </a>
                        </div>

                        {/* Mobile Hamburger Menu */}
                        <div className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
                            <MdMenu className="text-4xl text-gray-800" />
                        </div>
                    </div>
                </motion.div>

                {/* Optional: Mobile Menu for when isOpen is true */}

            </nav>
            {/* Spacer to prevent content jump when navbar becomes fixed */}
            {scrolled && <div style={{ height: `${navbarHeight}px` }} />}

            {/* mobile sidebar section */}
            <ResponsiveMenu isOpen={isOpen} />
        </>
    );
};

export default Navbar;