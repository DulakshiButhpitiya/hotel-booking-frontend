import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ClientGallery = () => {
  const [galleryItems, setGalleryItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/gallery")
      .then((res) => setGalleryItems(res.data.list ?? []))
      .catch((err) => console.error("Error fetching gallery items:", err));
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="relative z-10 flex flex-col items-center justify-center space-y-10 h-full bg-black bg-opacity-50">
       
    <div className=" py-10">
      {/* Title */}
      <h1
        className="text-center text-4xl font-semibold text-purple-700 tracking-wide mb-6"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        GALLERY
      </h1>

      {/* Image Slider */}
      <div className="max-w-6xl mx-auto px-4">
        <Slider {...settings}>
          {galleryItems.map((item, index) => (
            <div key={index} className="p-2">
              <img
                src={`http://localhost:5000/api/gallery/uploads/${item.img}`}
                alt={item.name}
                className="rounded-lg object-cover w-full h-[300px] cursor-pointer shadow-lg"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div> </div>
  );
};

// Custom Arrow Components (Styled like the Image)
const NextArrow = (props) => (
  <div
    {...props}
    className="absolute right-[-25px] top-1/2 transform -translate-y-1/2 bg-purple-600 text-white rounded-full p-3 cursor-pointer shadow-md hover:bg-purple-800 transition"
  >
    ➜
  </div>
);

const PrevArrow = (props) => (
  <div
    {...props}
    className="absolute left-[-25px] top-1/2 transform -translate-y-1/2 bg-purple-600 text-white rounded-full p-3 cursor-pointer shadow-md hover:bg-purple-800 transition"
  >
    ➜
  </div>
  
);

export default ClientGallery;
