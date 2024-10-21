import React, { useEffect, useState } from 'react';
import { HiMiniInformationCircle, HiOutlineDocumentDuplicate, HiOutlineIdentification, HiOutlineUserGroup, HiOutlineCake, HiOutlineAcademicCap } from "react-icons/hi2";

const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => setIsVisible(true), 100);
    }, []);

    const documents = [
        { icon: HiOutlineDocumentDuplicate, title: "Copy SKL/SKHU/Ijazah", description: "Sebanyak 1 Lembar (bisa menyusul)." },
        { icon: HiOutlineUserGroup, title: "Copy Kartu Keluarga", description: "Sebanyak 1 Lembar." },
        { icon: HiOutlineIdentification, title: "Copy KTP Kedua Orang Tua", description: "Sebanyak 1 Lembar." },
        { icon: HiOutlineCake, title: "Copy Akta Kelahiran", description: "Sebanyak 1 Lembar." },
        { icon: HiOutlineAcademicCap, title: "Copy KIP (Jika Ada)", description: "Kartu Indonesia Pintar, sebanyak 1 Lembar." },
    ];

    return (
        <div className="container px-4 py-16 mx-auto my-8 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl">
            <div className="mb-12 text-center">
                <h2 className="flex items-center justify-center mb-4 text-4xl font-bold text-indigo-800">
                    <HiMiniInformationCircle className="mr-3 text-5xl text-indigo-600" />
                    Informasi Dokumen Pendaftaran
                </h2>
                <p className="max-w-2xl mx-auto text-xl text-indigo-600">Dokumen yang perlu disiapkan untuk kelancaran proses pendaftaran Anda.</p>
            </div>

            <div className={`grid gap-6 md:grid-cols-2 lg:grid-cols-3 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                {documents.map((doc, index) => (
                    <div key={index} className="p-6 transition-all duration-300 transform bg-white shadow-md rounded-xl hover:shadow-xl hover:-translate-y-1">
                        <div className="flex items-center mb-4">
                            <span className="flex items-center justify-center w-12 h-12 text-indigo-600 bg-indigo-100 rounded-full">
                                <doc.icon className="w-6 h-6" />
                            </span>
                            <h3 className="ml-4 text-xl font-semibold text-gray-800">{doc.title}</h3>
                        </div>
                        <p className="ml-16 text-gray-600">{doc.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Hero;