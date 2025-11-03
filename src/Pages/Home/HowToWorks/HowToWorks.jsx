import React from "react";
import { FaBox, FaMoneyBillWave, FaWarehouse, FaBuilding } from "react-icons/fa";

const HowToWorks = () => {
  const items = [
    {
      icon: <FaBox className="text-4xl text-indigo-600 mb-4" />,
      title: "Booking Pick & Drop",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      icon: <FaMoneyBillWave className="text-4xl text-green-600 mb-4" />,
      title: "Cash On Delivery",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      icon: <FaWarehouse className="text-4xl text-yellow-600 mb-4" />,
      title: "Delivery Hub",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      icon: <FaBuilding className="text-4xl text-blue-600 mb-4" />,
      title: "Booking SME & Corporate",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
    },
  ];

  return (
    <div className="w-11/12 md:w-3/4 mx-auto py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-3">
          How It Works
        </h1>
        <p className="text-gray-500 text-lg">
          Simple steps to get your package delivered safely and quickly.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-2xl p-6 flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            {item.icon}
            <h3 className="text-xl font-semibold text-left text-gray-800 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-500 text-left">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowToWorks;
