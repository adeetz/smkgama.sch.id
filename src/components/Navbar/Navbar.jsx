import React from 'react';
import { NavbarMenu } from '../../mockData/data.js';
import { MdMenu } from 'react-icons/md';
import { motion } from 'framer-motion';
import ResponsiveMenu from './ResponsiveMenu.jsx';
import logo from '../../assets/logo30.png'; // Ganti dengan path logo Anda

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <>
            <nav>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <div className='container flex items-center justify-between py-6'>
                        {/* Logo Section */}
                        <div className='flex items-center gap-2 font-bold text-1xl'>
                            <img src={logo} alt="Logo SMK GAMA" className="h-10" /> {/* Mengganti ikon dengan gambar */}
                            <p>SMK Garuda Mahadhika</p>
                        </div>

                        {/* Menu Section */}
                        <div className="hidden lg:block">
                            <ul className="flex items-center gap-6">
                                {NavbarMenu.map((item) => (
                                    <li key={item.id}>
                                        <a
                                            href={item.link}
                                            className="inline-block px-2 py-1 text-sm font-semibold text-gray-600 transition-all duration-300 xl:text-base xl:px-3 hover:text-secondary"
                                        >
                                            {item.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* CTA Button Section */}
                        <div className="hidden space-x-6 lg:block">
                            <button className="px-6 py-2 font-semibold text-white rounded-full bg-secondary">
                                Register
                            </button>
                        </div>

                        {/* Mobile Hamburger Menu */}
                        <div className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
                            <MdMenu className="text-4xl" />
                        </div>
                    </div>
                </motion.div>

                {/* Optional: Mobile Menu for when isOpen is true */}
                {isOpen && (
                    <div className="absolute left-0 w-full bg-white shadow-lg lg:hidden top-16">
                        <ul className="flex flex-col items-center">
                            {NavbarMenu.map((item) => (
                                <li key={item.id} className="py-2">
                                    <a
                                        href={item.link}
                                        className="text-lg text-gray-700 hover:text-secondary"
                                    >
                                        {item.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </nav>

            {/* mobile sidebar section */}
            <ResponsiveMenu isOpen={isOpen} />
        </>
    );
};

export default Navbar;
