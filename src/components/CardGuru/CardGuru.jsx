import React, { useRef } from "react";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GiTeacher } from "react-icons/gi";
import adit from "../../assets/guru/adit.webp";
import ikrima from "../../assets/guru/ikrima.webp";
import irham from "../../assets/guru/irham.webp";
import anis from "../../assets/guru/anis.webp";
import aldi from "../../assets/guru/aldi.webp";
import adis from "../../assets/guru/adis.webp"; 
import may from "../../assets/guru/may.webp"; 
import nisa from "../../assets/guru/nisa.webp"; 
import ulya from "../../assets/guru/ulya.webp"; 
import rofi from "../../assets/guru/rofi.webp"; 
import fadly from "../../assets/guru/fadly.webp"; 
import ros from "../../assets/guru/ros.webp"; 
import dimas from "../../assets/guru/dimas.webp"; 
import irfan from "../../assets/guru/irfan.webp"; 
import aman from "../../assets/guru/aman.webp"; 
import akmal from "../../assets/guru/akmal.webp"; 
import riza from "../../assets/guru/riza.webp"; 

let data = [
  {
    img: aman,
    name: "Kepala Sekolah",
    subject: "Abdul Rahman, S.Kom",
    disc: "\"SMK Garuda Mahadhika: Terbang Tinggi, Raih Mimpi!\""
  },
  {
    img: adis,
    name: "Kepala Tata Usaha",
    subject: "Adis Maylinda, S.Sos.I",
    disc: "\"Kembangkan potensi diri kamu di SMK Garuda Mahadhika!\""
  },
  {
    img: may,
    name: "Waka Kurikulum",
    subject: "Maimunah, S.Pd",
    disc: "\"Belajar dengan para ahli dan raih masa depan cerah.\""
  },
  {
    img: nisa,
    name: "Waka Kesiswaaan",
    subject: "Khairunesya, S.Pd",
    disc: "\"Kualitas pendidikan unggul untuk bekal karier kamu.\""
  },
  {
    img: rofi, 
    name: "Waka Sarana dan Prasarana",
    subject: "Muhammad Rofi'i, S.Ap",
    disc: "\"Gabunglah dan jadilah bagian dari keluarga besar kami!\""
  },
  {
    img: ulya,
    name: "Guru Matematika",
    subject: "Ulya Alfiyani, S.Pd",
    disc: "\"Kami mendukung setiap langkahmu menuju kesuksesan.\""
  },
  {
    img: ikrima,
    name: "Kaprodi TKJT",
    subject: "Ikrima Shaleha, S.Pd",
    disc: "\"Lingkungan belajar yang inspiratif dan penuh semangat.\""
  },
  {
    img: anis,
    name: "Kaprodi MPLB",
    subject: "Annisa, S.Pd",
    disc: "\"Siapkan diri Anda untuk menghadapi tantangan dunia kerja!\""
  },
  {
    img: aldi,
    name: "Kaprodi DKV",
    subject: "M. Rialdi Pratama, S.Sos.I",
    disc: "\"Bersama kami, raih cita-cita dan impianmu!\""
  },
  {
    img: fadly,
    name: "Guru BK",
    subject: "Muhammad Fadly, S.Pd",
    disc: "\"Bergabunglah dengan SMK Garuda Mahadhika dan Jadilah Pemenang\""
  },
  {
    img: ros,
    name: "Guru BK",
    subject: "Alfisah Rosita Dewi, S.Pd",
    disc: "\"Inovasi Pendidikan untuk Generasi Hebat, Siapkan Diri untuk Menjadi Pemimpin Masa Depan!\""
  },
  {
    img: adit,
    name: "Guru Produktif TKJT",
    subject: "M. Noor Aditya Rahman, S.Kom",
    disc: "\"SMK Garuda Mahadhika, tempatnya generasi berkualitas!\""
  },
  {
    img: irham,
    name: "English Teacher",
    subject: "Irham Habibie, S.Pd",
    disc: "\"Be a student who is ready to compete in the Digital Era.\""
  },
  {
    img: dimas,
    name: "Guru Produktif TKJT",
    subject: "Dimas Saputra, S.Kom",
    disc: "\"Kembangkan Potensi dan Raih Cita-Cita Bersama Kami di SMK Garuda Mahadhika!\""
  },
  {
    img: irfan,
    name: "Guru Produktif TKJT",
    subject: "Irfan Noor Asyikin, S.Kom",
    disc: "\"Belajar Praktis di Lingkungan yang Inspiratif, Siapkan Diri untuk Sukses di Dunia Kerja!\""
  },
  {
    img: akmal,
    name: "Guru Produktif TKJT",
    subject: "M. Akmal Alifi, S.Kom",
    disc: "\"Siap Sukses? SMK Garuda Mahadhika Jawabannya!\""
  },
  {
    img: riza,
    name: "Guru Produktif TKJT",
    subject: "Muhammad Riza Fahlifi, S.Kom",
    disc: "\"Garuda Mahadhika - Tempa Skill, Raih Prestasi!\""
  },
];

const settings = {
  className: "center",
  centerMode: true,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  initialSlide: 0,
  arrows: false,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        centerMode: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        centerMode: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false
      }
    }
  ]
};

const Project = ({ item }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 text-center transition-transform transform hover:translate-y-[-10px] hover:shadow-xl flex flex-col justify-between w-full max-w-[250px] md:max-w-[300px] h-auto mx-auto sm:w-[100%] md:w-[90%] lg:w-[80%] perspective-1000">
      <div className="relative w-full h-[200px] mb-4 sm:h-[250px] md:h-[300px] flex items-center justify-center">
        <img 
          className="object-contain w-auto h-full rounded-lg" 
          src={item.img} 
          alt={item.name || "Guru"} 
          style={{
            maxWidth: '100%',
            maxHeight: '100%'
          }}
        />
      </div>
      <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
      <p className="mb-2 text-sm text-gray-500">{item.subject}</p>
      <p className="text-sm italic text-gray-600">{item.disc || "No description available."}</p>
    </div>
  );
};

const SliderComp = () => {
  const arrowRef = useRef(null);

  return (
    <div className="relative p-5 bg-gradient-to-b from-gray-100 to-white">
      <div className="container p-6 mx-auto my-8 text-center">
        <h2 className="flex items-center justify-center text-3xl font-bold text-gray-800">
          <GiTeacher className="mr-2 text-3xl" /> Guru dan Staff Sekolah
        </h2>
      </div>
      <Slider ref={arrowRef} {...settings}>
        {data.map((item, i) => (
          <Project item={item} key={i} />
        ))}
      </Slider>
      <button
        onClick={() => arrowRef.current.slickPrev()}
        className="absolute z-10 p-2 -translate-y-1/2 bg-white rounded-full shadow-md left-4 top-1/2 hover:bg-gray-100"
      >
        <IoIosArrowBack className="text-2xl text-teal-500 hover:text-teal-700" />
      </button>
      <button
        onClick={() => arrowRef.current.slickNext()}
        className="absolute z-10 p-2 -translate-y-1/2 bg-white rounded-full shadow-md right-4 top-1/2 hover:bg-gray-100"
      >
        <IoIosArrowForward className="text-2xl text-teal-500 hover:text-teal-700" />
      </button>
    </div>
  );
};

export default SliderComp;