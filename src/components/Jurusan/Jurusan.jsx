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
    <div className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container px-6 mx-auto">
        <motion.h1
          variants={fadeUp(0.2)}
          initial="hidden"
          whileInView="show"
          className="mb-16 text-5xl font-bold text-center text-gray-900"
        >
          PROGRAM KEAHLIAN SMK GARUDA
        </motion.h1>
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {ProductsData.map((item) => (
            <motion.div
              variants={fadeUp(item.delay)}
              key={item.id}
              initial="hidden"
              whileInView="show"
              className="flex flex-col h-full"
            >
              <div className="flex flex-col h-full overflow-hidden transition-all duration-300 transform bg-white shadow-xl rounded-xl hover:-translate-y-2 hover:shadow-2xl">
                <div className="relative h-48 overflow-hidden group">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-15000 ease-linear transform group-hover:rotate-[720deg]"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                    <h2 className="px-4 text-2xl font-bold text-center text-white">
                      {item.title}
                    </h2>
                  </div>
                </div>
                <div className="flex flex-col flex-grow p-6">
                  <p className="flex-grow text-gray-600">{item.desc}</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 mt-6 text-lg font-medium text-white transition duration-300 rounded-full shadow-md bg-gradient-to-r from-indigo-500 to-purple-600 hover:shadow-lg"
                  >
                    DAFTAR SEKARANG
                  </motion.button>
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