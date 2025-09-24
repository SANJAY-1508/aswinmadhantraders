import React from "react";
import Slider from "react-slick"; // Importing the slider component from react-slick
import "./OurBrands.css"; // Add custom styles if needed

import brand1 from "../../assets/images/brand1.jpg";
import brand2 from "../../assets/images/brand2.jpg";
import brand3 from "../../assets/images/brand3.jpg";
import brand4 from "../../assets/images/brand4.jpg";
import brand5 from "../../assets/images/brand5.jpg";
import brand6 from "../../assets/images/brand6.jpg";

const brands = [
  { id: 1, name: "Brand Logo 1", imageUrl: brand1 },
  { id: 2, name: "Brand Logo 2", imageUrl: brand2 },
  { id: 3, name: "Brand Logo 3", imageUrl: brand3 },
  { id: 4, name: "Brand Logo 4", imageUrl: brand4 },
  { id: 5, name: "Brand Logo 5", imageUrl: brand5 },
  { id: 6, name: "Brand Logo 6", imageUrl: brand6 },
];

const OurBrands = () => {
  // Slick slider settings for the carousel
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite loop
    speed: 500, // Transition speed
    slidesToShow: 4, // Number of logos visible at once
    slidesToScroll: 1, // Number of logos to scroll at once
    autoplay: true, // Autoplay the carousel
    autoplaySpeed: 2000, // Time between each autoplay transition
    responsive: [
      {
        breakpoint: 1024, // For tablets and smaller screens
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600, // For mobile screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Extra small screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="our-brands-section">
      <h2 className="section-title">Our Brands</h2>
      <p className="section-subtitle">
        We provide all top branded Deepavali crackers & other occasional Fire
        crackers...
      </p>
      <Slider {...settings} className="brands-slider">
        {brands.map((brand) => (
          <div key={brand.id} className="brand-item">
            <img src={brand.imageUrl} alt={brand.name} className="brand-logo" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default OurBrands;
