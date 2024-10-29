import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const NavbarBanner = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [isSticky, setIsSticky] = useState(false);
    
    const getTopOffset = () => {
        const baseNavHeight = 74;
        const menuElement = document.querySelector('[style*="top: 74px"]');
        return menuElement ? baseNavHeight + menuElement.offsetHeight : baseNavHeight;
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!isOpen) return null;

    return (
        <>
            {isSticky && <div className="h-[68px] sm:h-[76px]" />}
            
            <div 
                className={`w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
                    ${isSticky ? 'fixed left-0 right-0 z-30 shadow-md' : 'relative'}`}
                style={{
                    top: isSticky ? `${getTopOffset()}px` : '0',
                    transition: 'top 0.3s ease-in-out'
                }}
            >
                <div className="relative px-4 py-4 text-sm font-semibold text-white sm:px-6 sm:text-base">
                    <div className="flex flex-col items-center justify-center my-1 space-y-3 sm:flex-row sm:space-y-0 sm:space-x-6">
                        <span className="text-center sm:text-left">
                            Pendaftaran Siswa Baru sudah dibuka, segera daftarkan dirimu!
                        </span>
                        <a 
                            href="https://ppdb.smkgama.sch.id/daftarsiswa"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-6 py-2.5 text-sm font-medium bg-yellow-300 text-black rounded-full hover:bg-yellow-400 transition-colors"
                            style={{
                                animation: 'blink 1.5s ease-in-out infinite'
                            }}
                        >
                            <span className="inline-block">
                                Klik disini!
                            </span>
                        </a>
                    </div>

                    <button 
                        className="absolute text-white transition-colors -translate-y-1/2 right-4 sm:right-6 top-1/2 hover:text-gray-200"
                        onClick={() => setIsOpen(false)}
                    >
                        <X className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>
                </div>

                <style jsx>{`
                    @keyframes blink {
                        0% {
                            opacity: 1;
                        }
                        50% {
                            opacity: 0.5;
                        }
                        100% {
                            opacity: 1;
                        }
                    }
                `}</style>
            </div>
        </>
    );
};

export default NavbarBanner;