import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import Dudi1 from "../../assets/dudi/dudi1.png";
import Dudi2 from "../../assets/dudi/dudi2.png";
import Dudi3 from "../../assets/dudi/dudi3.png";
import Dudi4 from "../../assets/dudi/dudi4.png";
import Dudi5 from "../../assets/dudi/dudi5.png";
import Dudi6 from "../../assets/dudi/dudi6.png";
import Dudi7 from "../../assets/dudi/dudi7.webp";
import Dudi8 from "../../assets/dudi/dudi8.webp";
import Dudi9 from "../../assets/dudi/dudi9.webp";

const Brand = () => {
  const dudiImages = [Dudi1, Dudi2, Dudi3, Dudi4, Dudi5, Dudi6, Dudi7, Dudi8, Dudi9];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center mb-12"
        >
          <Briefcase className="mr-3 text-white" size={32} />
          <h2 className="text-3xl font-bold text-center text-white">
            Kerjasama Dunia Usaha dan Industri
          </h2>
        </motion.div>
        <div className="grid grid-cols-3 gap-8 md:grid-cols-5 justify-items-center">
          {dudiImages.map((dudi, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="p-4 transition-all duration-300 bg-white rounded-lg shadow-lg hover:shadow-2xl"
            >
              <img
                src={dudi}
                alt={`Dudi ${index + 1}`}
                className="object-contain w-20 h-20"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brand;