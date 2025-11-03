import React, { useState, useEffect } from 'react';
import banner1 from '../../../assets/banner/banner1.png';
import banner2 from '../../../assets/banner/banner2.png';
import banner3 from '../../../assets/banner/banner3.png';

const banners = [banner1, banner2, banner3];

const BannerSlider = () => {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex justify-center py-30">
      <div className="w-full md:w-3/4 h-[60vh] relative overflow-hidden rounded-3xl shadow-2xl">
        <img
          src={banners[current]}
          alt={`Banner ${current + 1}`}
          className="w-full h-full object-cover rounded-3xl transition-all duration-300"
        />
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-32 flex gap-3">
        {banners.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === current ? 'bg-white' : 'bg-gray-400'
            }`}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default BannerSlider;
