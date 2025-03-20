import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Products from "./Products";

const Home = () => {
  const banners = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1920",
      title: "Fashion Collection",
      subtitle: "Up to 50% off on selected items",
      link: "/products",
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=1920",
      title: "Electronics Sale",
      subtitle: "Latest Gadgets & Accessories",
      link: "/products",
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920",
      title: "Home Essentials",
      subtitle: "Make your home beautiful",
      link: "/products",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    fade: true,
    cssEase: "cubic-bezier(0.87, 0, 0.13, 1)",
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="space-y-12 overflow-hidden">
      {/* Hero Slider Section */}
      <section className="relative">
        <Slider {...settings}>
          {banners.map((banner) => (
            <div key={banner.id} className="relative w-full">
              <div className="w-full h-[200px] md:h-[300px] lg:h-[400px] relative">
                <img
                  src={banner.img}
                  alt={`Banner ${banner.id}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">
                    {banner.title}
                  </h2>
                  <p className="text-lg md:text-xl mb-6 text-center">
                    {banner.subtitle}
                  </p>
                  <Link
                    to={banner.link}
                    className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>
      <Products/>
    </div>
  );
};

export default Home;
