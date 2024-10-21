import React from "react";
import P1 from "../../assets/tkj.webp";
import P2 from "../../assets/dkv.webp";
import P3 from "../../assets/mlpb.webp";
import { motion } from "framer-motion";

// Animation for fade up effect
export const fadeUp = (delay) => {
  return {
    hidden: {
      opacity: 0,
      y: 50,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

// Product data
const ProductsData = [
  {
    id: 1,
    title: "Teknik Komputer Jaringan dan Telekomunikasi (TKJT)",
    image: P1,
    desc: "Lulusan siap bekerja sebagai teknisi jaringan atau ahli telekomunikasi",
    delay: 0.5,
  },
  {
    id: 2,
    title: "Desain Komunikasi Visual (DKV)",
    desc: "Lulusan DKV ahli dalam merancang grafis, ilustrasi, dan media digital untuk industri kreatif.",
    image: P2,
    delay: 0.8,
  },
  {
    id: 3,
    title: "Manajemen Perkantoran dan Layanan Bisnis (MPLB)",
    desc: "Lulusan MPLB memiliki keterampilan manajemen dokumen, layanan pelanggan, dan operasional kantor untuk mendukung efisiensi perusahaan.",
    image: P3,
    delay: 1.1,
  },
];

const Products = () => {
  return (
    <div className="py-20 bg-gray-100">
      <div className="container px-6 mx-auto">
        <motion.h1
          variants={fadeUp(0.2)}
          initial="hidden"
          whileInView="show"
          className="mb-16 text-4xl font-bold text-center text-gray-900"
        >
          PROGRAM KEAHLIAN
        </motion.h1>
        {/* Card section */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3">
          {ProductsData.map((item) => (
            <motion.div
              variants={fadeUp(item.delay)}
              key={item.id}
              initial="hidden"
              whileInView={"show"}
              className="max-w-[340px] mx-auto transition-transform transform hover:scale-105"
            >
              {/* Title above card */}
              <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
                {item.title}
              </h2>
              
              <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl flex flex-col items-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="mx-auto mb-6 w-36 h-36 object-cover rounded-full shadow-md transition-transform duration-500 hover:scale-110"
                />
                <div className="space-y-4 text-center">
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  <button className="px-8 py-3 mt-6 text-lg text-white rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-110">
                    DAFTAR SEKARANG
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
