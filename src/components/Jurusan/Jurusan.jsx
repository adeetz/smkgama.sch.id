import React from "react";
import P1 from "../../assets/tkj.webp";
import P2 from "../../assets/dkv.webp";
import P3 from "../../assets/mlpb.webp";
import { motion } from "framer-motion";

export const fadeUp = (delay) => ({
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: "easeInOut" },
  },
});

const ProductsData = [
  {
    id: 1,
    title: "Teknik Komputer Jaringan dan Telekomunikasi (TKJT)",
    image: P1,
    desc: "Lulusan siap bekerja sebagai teknisi jaringan atau ahli telekomunikasi",
    delay: 0.5,
    color: "from-red-500 to-red-600",
  },
  {
    id: 2,
    title: "Desain Komunikasi Visual (DKV)",
    desc: "Lulusan DKV ahli dalam merancang grafis, ilustrasi, dan media digital untuk industri kreatif.",
    image: P2,
    delay: 0.8,
    color: "from-purple-500 to-purple-600",
  },
  {
    id: 3,
    title: "Manajemen Perkantoran dan Layanan Bisnis (MPLB)",
    desc: "Lulusan MPLB memiliki keterampilan manajemen dokumen, layanan pelanggan, dan operasional kantor untuk mendukung efisiensi perusahaan.",
    image: P3,
    delay: 1.1,
    color: "from-blue-300 to-blue-400",
  },
];

const Products = () => {
  return (
    <div className="py-10 md:py-20 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container px-4 mx-auto md:px-6">
        <motion.h2
          variants={fadeUp(0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-8 text-3xl font-bold text-center text-gray-900 md:mb-16 md:text-5xl"
        >
          PROGRAM KEAHLIAN SMK GARUDA MAHADHIKA
        </motion.h2>
        <div className="grid grid-cols-1 gap-8 md:gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {ProductsData.map((item) => (
            <motion.div
              variants={fadeUp(item.delay)}
              key={item.id}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-col h-full"
            >
              <div className="flex flex-col h-full overflow-hidden transition-all duration-300 transform bg-white shadow-xl rounded-xl hover:-translate-y-2 hover:shadow-2xl">
                <div className="relative overflow-hidden aspect-w-16 aspect-h-9 group">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-15000 ease-linear transform group-hover:rotate-[720deg]"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                    <h2 className="px-4 text-xl font-bold text-center text-white md:text-2xl">
                      {item.title}
                    </h2>
                  </div>
                </div>
                <div className="flex flex-col flex-grow p-4 md:p-6">
                  <p className="flex-grow text-sm text-gray-600 md:text-base">{item.desc}</p>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 py-2 mt-4 text-base font-medium text-white transition duration-300 rounded-full shadow-md md:px-6 md:py-3 md:mt-6 md:text-lg bg-gradient-to-r ${item.color} hover:shadow-lg text-center`}
                  >
                    DAFTAR SEKARANG
                  </motion.a>
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