import React from "react";
import P1 from "../../assets/tkj.webp";
import P2 from "../../assets/dkv.webp";
import P3 from "../../assets/mlpb.webp";
import { motion } from "framer-motion";

export const fadeUp = (delay) => ({
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay, ease: "easeOut" },
  },
});

const ProductsData = [
  {
    id: 1,
    title: "Teknik Komputer Jaringan dan Telekomunikasi (TKJT)",
    image: P1,
    desc: "Lulusan siap bekerja sebagai teknisi jaringan atau ahli telekomunikasi",
    delay: 0.2,
    color: "from-red-500 to-red-600",
  },
  {
    id: 2,
    title: "Desain Komunikasi Visual (DKV)",
    desc: "Lulusan DKV ahli dalam merancang grafis, ilustrasi, dan media digital untuk industri kreatif.",
    image: P2,
    delay: 0.3,
    color: "from-purple-500 to-purple-600",
  },
  {
    id: 3,
    title: "Manajemen Perkantoran dan Layanan Bisnis (MPLB)",
    desc: "Lulusan MPLB memiliki keterampilan manajemen dokumen, layanan pelanggan, dan operasional kantor untuk mendukung efisiensi perusahaan.",
    image: P3,
    delay: 0.4,
    color: "from-blue-300 to-blue-400",
  },
];

const Products = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container px-4 mx-auto">
        <motion.h2
          variants={fadeUp(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-8 text-2xl font-bold text-center text-gray-900 md:text-3xl"
        >
          Program Keahlian
        </motion.h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ProductsData.map((item) => (
            <motion.div
              variants={fadeUp(item.delay)}
              key={item.id}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <div className="overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
                <div className="relative aspect-[4/3] overflow-hidden group">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-contain transition-transform duration-15000 ease-linear transform group-hover:rotate-[720deg]"
                  />
                  <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 bg-black/40 hover:bg-black/30">
                    <h3 className="px-4 text-lg font-semibold text-center text-white">
                      {item.title}
                    </h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="mb-6 text-sm text-gray-600 line-clamp-2">{item.desc}</p>
                  <motion.a
                    href="https://ppdb.smkgama.sch.id/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`inline-block w-full py-3 text-base font-semibold text-white text-center rounded-lg transition-all bg-gradient-to-r ${item.color} hover:shadow-md`}
                  >
                    Daftar Sekarang
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