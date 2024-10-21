import React from "react"; 
import { Typography } from "@material-tailwind/react";
import Photo from "../../assets/images/photo.png"; // Import gambar dari folder assets

const ImageWithCaption = () => {
  return (
    <img
      className="w-full h-auto max-w-full object-cover object-center"
      src={Photo} // Menggunakan variabel yang diimpor
      alt="nature image"
    />
  );
}

export default ImageWithCaption;
