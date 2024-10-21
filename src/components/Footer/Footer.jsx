import React from "react";
import { FaYoutube, FaInstagram, FaTiktok, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import logo from '../../assets/logo30.png';

const Footer = () => {
    return (
        <footer className="text-white bg-gradient-to-r from-blue-600 to-blue-800">
            <div className="container px-4 py-12 mx-auto">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {/* Brand Info Section */}
                    <div className="space-y-4">
                        <div className='flex items-center gap-2 text-2xl font-bold'>
                            <img src={logo} alt="Logo SMK GAMA" className="h-10" />
                            <span>SMK Garuda Mahadhika</span>
                        </div>
                        <p className="text-sm">
                        Di SMK Garuda Mahadhika, Kami Tidak Hanya Mendidik, Tapi Juga Menginspirasi dan Memberdayakan Siswa untuk Menjadi Pribadi yang Kompeten, Kreatif, dan Siap Menghadapi Tantangan Global
                        </p>
                        <div className="flex items-center space-x-4">
                            <a href="#" className="transition-colors hover:text-yellow-400" aria-label="Instagram">
                                <FaInstagram className="text-2xl" />
                            </a>
                            <a href="#" className="transition-colors hover:text-yellow-400" aria-label="YouTube">
                                <FaYoutube className="text-2xl" />
                            </a>
                            <a href="#" className="transition-colors hover:text-yellow-400" aria-label="TikTok">
                                <FaTiktok className="text-2xl" />
                            </a>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="mb-4 text-lg font-semibold">Hubungi Kami</h3>
                        <address className="space-y-3 not-italic">
                            <p className="flex items-start">
                                <FaMapMarkerAlt className="flex-shrink-0 mt-1 mr-2 text-yellow-400" />
                                <span>Jl. A.Yani Km 32,5 No. 24, Loktabat Sel., Kec. Banjarbaru Selatan, Kota Banjar Baru, Kalimantan Selatan 70714</span>
                            </p>
                            <p className="flex items-center">
                                <FaPhone className="flex-shrink-0 mr-2 text-yellow-400" />
                                <span>Telepon: (0511) 6749988</span>
                            </p>
                            <p className="flex items-center">
                                <FaEnvelope className="flex-shrink-0 mr-2 text-yellow-400" />
                                <span>Email: smkgarudamahadhikabjb@gmail.com</span>
                            </p>
                        </address>
                    </div>
                </div>

                {/* Google Maps Section */}
                <div className="mt-12">
                    <h3 className="mb-4 text-lg font-semibold">Lokasi Kami</h3>
                    <div className="overflow-hidden rounded-lg shadow-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15930.425821852323!2d114.81255849999997!3d-3.4454844999999965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2de681632400eaa9%3A0x959913672ac8da96!2sSMK%20Garuda%20Mahadhika!5e0!3m2!1sid!2sid!4v1729263665079!5m2!1sid!2sid"
                            width="100%"
                            height="300"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            title="Lokasi SMK Garuda Mahadhika"
                        ></iframe>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="pt-8 mt-12 border-t border-blue-400">
                    <p className="text-sm text-center">
                        © 2024 SMK Garuda Mahadhika. Hak Cipta Dilindungi. Dikembangkan oleh <a href="https://gamatekno.co.id" className="transition-colors hover:text-yellow-400">gamatekno.co.id</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;