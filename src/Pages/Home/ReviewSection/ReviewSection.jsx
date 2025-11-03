// ReviewSection.jsx
import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaQuoteLeft } from "react-icons/fa";
import { useSwipeable } from "react-swipeable";

const testimonials = [
  {
    name: "Rasel Ahamed",
    role: "CTO",
    text: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
  },
  {
    name: "Awlad Hossin",
    role: "Senior Product Designer",
    text: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
  },
  {
    name: "Nasir Uddin",
    role: "CEO",
    text: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
  },
  {
    name: "Mizan Rahman",
    role: "Manager",
    text: "Excellent service! The posture corrector helped me fix my back alignment effectively.",
  },
  {
    name: "Mizan Rahman",
    role: "Manager",
    text: "Excellent service! The posture corrector helped me fix my back alignment effectively.",
  },
  {
    name: "Mizan Rahman",
    role: "Manager",
    text: "Excellent service! The posture corrector helped me fix my back alignment effectively.",
  },
  {
    name: "Mizan Rahman",
    role: "Manager",
    text: "Excellent service! The posture corrector helped me fix my back alignment effectively.",
  },
];

const ReviewSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setActiveIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  // swipe handler
  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <div className="bg-gray-50 py-20 px-5 text-center">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <div className="flex justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-14 h-14"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#CAEB67"
              strokeWidth={2}
            >
              <path d="M12 6v6l4 2" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800">
            What our customers are saying
          </h2>
          <p className="text-gray-500 mt-2">
            Enhance posture, mobility, and well-being effortlessly with Posture
            Pro. Achieve proper alignment, reduce pain, and strengthen your body
            with ease!
          </p>
        </div>

        {/* Carousel */}
        <div
          {...handlers}
          className="relative flex items-center justify-center overflow-hidden"
        >
          {/* Left Button */}
          <button
            onClick={prevSlide}
            className="absolute left-0 md:-left-10 bg-white shadow-md p-3 rounded-full hover:bg-[#f5f9e1] transition z-10"
          >
            <FaArrowLeft className="text-[#CAEB67]" />
          </button>

          {/* Cards Container */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${activeIndex * 100}%)`,
              width: `${testimonials.length * 100}%`,
            }}
          >
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 px-5 md:px-10"
                style={{ width: "100%" }}
              >
                <div className="bg-white shadow-lg rounded-2xl p-6 mx-auto max-w-md">
                  <FaQuoteLeft className="text-[#CAEB67] text-2xl mb-4" />
                  <p className="text-sm md:text-base mb-6 leading-relaxed text-gray-600">
                    {t.text}
                  </p>
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-[#CAEB67]" />
                    <h3 className="mt-3 font-semibold text-gray-800">
                      {t.name}
                    </h3>
                    <p className="text-sm text-gray-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Button */}
          <button
            onClick={nextSlide}
            className="absolute right-0 md:-right-10 bg-[#CAEB67] text-white shadow-md p-3 rounded-full hover:opacity-90 transition z-10"
          >
            <FaArrowRight />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, i) => (
            <div
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`w-2.5 h-2.5 rounded-full cursor-pointer ${
                i === activeIndex ? "bg-[#CAEB67]" : "bg-gray-300"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
