import React from "react";
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
  return (
    <>
      <section className="bg-[#141414] py-8">
        <div className="container text-center">
          <h2 className="mb-6 text-2xl font-bold text-white">
            Kerjasama Dunia Usaha dan Industri
          </h2>
          <div className="flex flex-wrap justify-around gap-6">
            {/* Pindahkan grup gambar ke dalam map untuk lebih efisien */}
            {[Dudi1, Dudi2, Dudi3, Dudi4, Dudi5, Dudi6, Dudi7, Dudi8, Dudi9,].map((dudi, index) => (
              <div key={index} className="group">
                <img
                  src={dudi}
                  alt={`Dudi ${index + 1}`}
                  className="max-w-[100px] transition-transform duration-300 ease-in-out transform group-hover:scale-105 shadow-lg hover:shadow-2xl animate-move"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>
        {`
          @keyframes move {
            0%,
            100% {
              transform: translateX(0);
            }
            50% {
              transform: translateX(10px); /* Ubah jarak untuk gerakan */
            }
          }

          .animate-move {
            animation: move 1s ease-in-out infinite; /* Ubah durasi dan kecepatan animasi di sini */
          }
        `}
      </style>
    </>
  );
};

export default Brand;
