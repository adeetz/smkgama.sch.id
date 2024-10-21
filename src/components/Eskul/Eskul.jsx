import React from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';

const ExtracurricularList = () => {
  const extracurriculars = [
    { name: 'PMR', icon: 'Heart', color: 'bg-red-500' },
    { name: 'PRAMUKA', icon: 'Tent', color: 'bg-green-700' },
    { name: 'BADMINTON', icon: 'Medal', color: 'bg-green-500' }, // Menggunakan 'Medal' untuk badminton
    { name: 'FUTSAL', icon: 'Volleyball', color: 'bg-blue-500' }, // Menggunakan 'Volleyball' untuk futsal
    { name: 'E-SPORTS', icon: 'Gamepad', color: 'bg-purple-500' },
    { name: 'SILAT', icon: 'Swords', color: 'bg-yellow-500' },
    { name: 'PASKIBRAKA', icon: 'Flag', color: 'bg-orange-500' },
    { name: 'HABSY', icon: 'Music', color: 'bg-teal-500' },
  ];

  const IconComponent = ({ iconName, ...props }) => {
    const Icon = LucideIcons[iconName] || LucideIcons.HelpCircle; // Menggunakan HelpCircle sebagai fallback
    return <Icon {...props} />;
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center mb-12"
        >
          <IconComponent iconName="Activity" className="mr-3 text-gray-800" size={32} />
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Ekstrakurikuler
          </h2>
        </motion.div>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {extracurriculars.map((ekskul, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className={`${ekskul.color} rounded-lg shadow-lg p-6 flex flex-col items-center justify-center text-white cursor-pointer`}
            >
              <IconComponent iconName={ekskul.icon} size={48} className="mb-4" />
              <h3 className="text-xl font-semibold text-center">{ekskul.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExtracurricularList;