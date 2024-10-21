import React from "react";
import { FaYoutube, FaInstagram, FaTiktok } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import FooterImg from "../../assets/footer.jpg";
import logo from '../../assets/logo30.png';

const FooterBg = {
    backgroundImage: `url(${FooterImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "bottom center",
};

const Footer = () => {
    return (
        <div style={FooterBg} className="rounded-t-3xl">
            <div className="bg-white bg-opacity-80 rounded-t-3xl">
                <div className="container py-8 mx-auto">
                    <div className="grid py-5 text-black border-t-2 md:grid-cols-4 md:gap-4 border-gray-300/10">
                        {/* Brand Info Section */}
                        <div className="px-4 py-8 space-y-4">
                            <div className='flex items-center gap-2 text-2xl font-bold'>
                                <img src={logo} alt="Logo SMK GAMA" className="h-10" />
                                <span>SMK Garuda Mahadhika</span>
                            </div>
                            <p className="text-sm text-gray-700">
                                Jl. A.Yani Km 32,5 No. 24, Loktabat Sel., Kec. Banjarbaru Selatan, Kota Banjar Baru, Kalimantan Selatan 70714
                            </p>
                            <div className="flex items-center justify-start gap-6 mt-6">
                                <a href="#" className="text-gray-700 duration-200 hover:text-blue-600">
                                    <HiLocationMarker className="text-3xl" />
                                </a>
                                <a href="#" className="text-gray-700 duration-200 hover:text-blue-600">
                                    <FaInstagram className="text-3xl" />
                                </a>
                                <a href="#" className="text-gray-700 duration-200 hover:text-blue-600">
                                    <FaYoutube className="text-3xl" />
                                </a>
                                <a href="#" className="text-gray-700 duration-200 hover:text-blue-600">
                                    <FaTiktok className="text-3xl" />
                                </a>
                            </div>
                        </div>

                        {/* Google Maps Section */}
                        <div className="px-4 py-8 md:col-span-3">
                            <h3 className="mb-2 text-lg font-semibold text-gray-800">Lokasi Kami</h3>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15930.425821852323!2d114.81255849999997!3d-3.4454844999999965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2de681632400eaa9%3A0x959913672ac8da96!2sSMK%20Garuda%20Mahadhika!5e0!3m2!1sid!2sid!4v1729263665079!5m2!1sid!2sid"
                                width="100%"
                                height="250"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>

                    {/* Copyright Section */}
                    <div className="mt-8">
                        <div className="py-4 text-center border-t-2 border-gray-800/10">
                            <span className="text-sm text-black/60">
                                @copyright 2024 gamatekno.co.id
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
