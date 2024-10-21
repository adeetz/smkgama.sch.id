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
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: false,
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Slider {...settings} className="h-full">
        {[Photo, Photo2, Photo3].map((photo, index) => (
          <div key={index} className="relative h-screen">
            <img
              className="absolute inset-0 object-cover object-center w-full h-full"
              src={photo}
              alt={`Kelulusan SMK Garuda Mahadhika ${index + 1}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;