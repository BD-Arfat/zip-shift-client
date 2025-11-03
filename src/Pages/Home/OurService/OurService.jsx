import React from "react";
import { FaGlobeAsia, FaBoxOpen, FaMoneyBillWave, FaBuilding, FaUndoAlt } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";



const services = [
  {
    icon: <FaTruckFast className="text-5xl text-blue-500 mb-3" />,
    title: "Express & Standard Delivery",
    description:
      "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
  },
  {
    icon: <FaGlobeAsia className="text-5xl text-green-600 mb-3" />,
    title: "Nationwide Delivery",
    highlight: true,
    description:
      "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
  },
  {
    icon: <FaBoxOpen className="text-5xl text-purple-500 mb-3" />,
    title: "Fulfillment Solution",
    description:
      "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
  },
  {
    icon: <FaMoneyBillWave className="text-5xl text-emerald-500 mb-3" />,
    title: "Cash on Home Delivery",
    description:
      "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
  },
  {
    icon: <FaBuilding className="text-5xl text-orange-500 mb-3" />,
    title: "Corporate Service / Contract in Logistics",
    description:
      "Customized corporate services which include warehouse and inventory management support.",
  },
  {
    icon: <FaUndoAlt className="text-5xl text-pink-500 mb-3" />,
    title: "Parcel Return",
    description:
      "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
  },
];

const OurService = () => {
  return (
    <section className="bg-[#0d3940] text-white py-16 px-4 md:px-10 rounded-3xl mt-20 mb-20">
      {/* Header */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 border-b-2 inline-block border-dashed border-teal-400 pb-2">
          Our Services
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-base md:text-lg">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
      </div>

      {/* Services Grid */}
      <div className=" w-3/4 mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className={`p-8 rounded-2xl text-center shadow-lg transition-all duration-300 ${
              service.highlight
                ? "bg-[#d8f47a] text-gray-800"
                : "bg-white text-gray-800 hover:-translate-y-2 hover:shadow-2xl"
            }`}
          >
            <div className="flex justify-center mb-4">{service.icon}</div>
            <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurService;
