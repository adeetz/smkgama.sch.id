import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Photo from "../../assets/images/photo1.jpg";
import Photo2 from "../../assets/images/photo2.jpg";
import Photo3 from "../../assets/images/photo3.jpg";

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    adaptiveHeight: false, // Changed to false to maintain consistent height
    fade: true,
    cssEase: "cubic-bezier(0.87, 0.03, 0.41, 0.9)",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        }
      }
    ],
    dotsClass: "slick-dots !bottom-6"
  };

  return (
    <div className="relative w-full overflow-hidden group">
      <Slider {...settings} className="h-full [&_.slick-slide]:transition-opacity [&_.slick-slide]:duration-700">
        {[Photo, Photo2, Photo3].map((photo, index) => (
          <div key={index} className="relative">
            {/* Optimized image container */}
            <div className="relative aspect-[21/9] overflow-hidden bg-gray-100">
              <img
                className="w-full h-full object-cover object-center transform scale-100 hover:scale-105 transition-transform duration-[2000ms]"
                src={photo}
                alt={`Website SMK Garuda Mahadhika ${index + 1}`}
                loading={index === 0 ? "eager" : "lazy"}
                style={{
                  imageRendering: "crisp-edges",
                  WebkitBackfaceVisibility: "hidden",
                  backfaceVisibility: "hidden",
                }}
              />
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          </div>
        ))}
      </Slider>

      {/* Custom navigation arrows */}
      <button 
        className="absolute items-center justify-center hidden w-10 h-10 transition-all duration-300 -translate-y-1/2 rounded-full opacity-0 left-4 top-1/2 bg-black/20 hover:bg-black/30 backdrop-blur-sm group-hover:opacity-100 md:flex"
        onClick={() => document.querySelector('.slick-prev')?.click()}
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button 
        className="absolute items-center justify-center hidden w-10 h-10 transition-all duration-300 -translate-y-1/2 rounded-full opacity-0 right-4 top-1/2 bg-black/20 hover:bg-black/30 backdrop-blur-sm group-hover:opacity-100 md:flex"
        onClick={() => document.querySelector('.slick-next')?.click()}
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <style jsx global>{`
        .slick-slide {
          -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
        }
        .slick-track {
          -webkit-perspective: 1000;
          perspective: 1000;
        }
      `}</style>
    </div>
  );
};

export default ImageSlider;