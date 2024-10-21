import React, { useEffect, useState } from 'react';
import { HiMiniInformationCircle } from "react-icons/hi2";

const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Simulate a delay to trigger the animation after the component is mounted
        setTimeout(() => setIsVisible(true), 100);
    }, []);

    return (
        <div className="container p-6 mx-auto my-8">
            {/* Brand Info */}
            <div className="mb-8 text-center">
                <h2 className="flex items-center justify-center text-4xl font-bold text-gray-800">
                    <HiMiniInformationCircle className="mr-2 text-4xl" />
                    Informasi Dokumen Pendaftaran
                </h2>
                <p className="text-lg text-gray-600">Dokumen yang perlu disiapkan untuk pendaftaran.</p>
            </div>

            {/* Informasi List */}
            <div className={`flex flex-wrap justify-center transform transition-all duration-700 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
                <div className="w-full lg:w-2/3">
                    {/* Copy SKL/SKHU/Ijazah */}
                    <a href="#" className="block p-6 mb-6 transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
                        <div className="flex items-center">
                            <span className="flex items-center justify-center w-12 h-12 text-lg font-bold text-white bg-blue-600 rounded-full">1</span>
                            <div className="ml-6">
                                <h6 className="text-xl font-semibold text-gray-800">Copy SKL/SKHU/Ijazah</h6>
                                <p className="text-sm text-gray-500">Sebanyak 1 Lembar (bisa menyusul).</p>
                            </div>
                        </div>
                    </a>

                    {/* Copy Kartu Keluarga */}
                    <a href="#" className="block p-6 mb-6 transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
                        <div className="flex items-center">
                            <span className="flex items-center justify-center w-12 h-12 text-lg font-bold text-white bg-blue-600 rounded-full">2</span>
                            <div className="ml-6">
                                <h6 className="text-xl font-semibold text-gray-800">Copy Kartu Keluarga</h6>
                                <p className="text-sm text-gray-500">Sebanyak 1 Lembar.</p>
                            </div>
                        </div>
                    </a>

                    {/* Copy KTP Kedua Orang Tua */}
                    <a href="#" className="block p-6 mb-6 transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
                        <div className="flex items-center">
                            <span className="flex items-center justify-center w-12 h-12 text-lg font-bold text-white bg-blue-600 rounded-full">3</span>
                            <div className="ml-6">
                                <h6 className="text-xl font-semibold text-gray-800">Copy KTP Kedua Orang Tua</h6>
                                <p className="text-sm text-gray-500">Sebanyak 1 Lembar.</p>
                            </div>
                        </div>
                    </a>

                    {/* Copy Akta Kelahiran */}
                    <a href="#" className="block p-6 mb-6 transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
                        <div className="flex items-center">
                            <span className="flex items-center justify-center w-12 h-12 text-lg font-bold text-white bg-blue-600 rounded-full">4</span>
                            <div className="ml-6">
                                <h6 className="text-xl font-semibold text-gray-800">Copy Akta Kelahiran</h6>
                                <p className="text-sm text-gray-500">Sebanyak 1 Lembar.</p>
                            </div>
                        </div>
                    </a>

                    {/* Copy KIP (Jika Ada) */}
                    <a href="#" className="block p-6 mb-6 transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
                        <div className="flex items-center">
                            <span className="flex items-center justify-center w-12 h-12 text-lg font-bold text-white bg-blue-600 rounded-full">5</span>
                            <div className="ml-6">
                                <h6 className="text-xl font-semibold text-gray-800">Copy KIP (Jika Ada)</h6>
                                <p className="text-sm text-gray-500">Kartu Indonesia Pintar, sebanyak 1 Lembar.</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
