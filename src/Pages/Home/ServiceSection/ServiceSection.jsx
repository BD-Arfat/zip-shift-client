import React from "react";
import liveTracking from "../../../assets/live-tracking.png";
import safeDelivery from "../../../assets/safe-delivery.png";

const services = [
  {
    image: liveTracking,
    title: "Live Parcel Tracking",
    description:
      "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment’s journey and get instant status updates for complete peace of mind.",
  },
  {
    image: safeDelivery,
    title: "100% Safe Delivery",
    description:
      "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
  },
  {
    image: safeDelivery,
    title: "24/7 Call Center Support",
    description:
      "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
  },
];

const ServiceSection = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12 rounded-3xl mt-10">
      <div className="max-w-6xl mx-auto space-y-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white flex flex-col md:flex-row items-center gap-6 md:gap-10 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
          >
            {/* Left image */}
            <div className="w-full md:w-1/3 flex justify-center">
              <img
                src={service.image}
                alt={service.title}
                className="w-52 h-auto object-contain"
              />
            </div>

            {/* Right text */}
            <div className="w-full md:w-2/3 text-center md:text-left">
              <h3 className="text-xl font-bold text-[#0d3940] mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
