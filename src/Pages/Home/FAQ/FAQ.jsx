import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const faqData = [
  {
    question: "How does this posture corrector work?",
    answer:
      "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here's how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders.",
  },
  {
    question: "Is it suitable for all ages and body types?",
    answer:
      "Yes, the posture corrector is designed to fit most body types and ages. Adjustable straps ensure a comfortable and secure fit for everyone.",
  },
  {
    question: "Does it really help with back pain and posture improvement?",
    answer:
      "Regular use of the posture corrector can help reduce back pain and improve posture by aligning your spine and shoulders properly.",
  },
  {
    question: "Does it have smart features like vibration alerts?",
    answer:
      "Some advanced models come with vibration alerts to remind you to correct your posture throughout the day.",
  },
  {
    question: "How will I be notified when the product is back in stock?",
    answer:
      "You will receive notifications via email or app notifications if you’ve signed up for alerts on our website.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section className="bg-gray-100 py-16 px-6 md:px-12 rounded-xl">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Frequently Asked Question (FAQ)
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Enhance posture, mobility, and well-being effortlessly with Posture Pro.
          Achieve proper alignment, reduce pain, and strengthen your body with ease!
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-3">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`border rounded-lg overflow-hidden ${
              activeIndex === index ? "bg-teal-50 border-teal-400" : "bg-white border-gray-200"
            }`}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-4 font-medium text-gray-800 focus:outline-none"
            >
              {item.question}
              {activeIndex === index ? <FiChevronUp /> : <FiChevronDown />}
            </button>
            {activeIndex === index && (
              <div className="p-4 text-gray-600 border-t border-gray-200">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button className="bg-lime-400 hover:bg-lime-500 text-gray-900 font-semibold px-6 py-3 rounded-full inline-flex items-center gap-2 transition-all">
          See More FAQ's <span className="text-black">→</span>
        </button>
      </div>
    </section>
  );
};

export default FAQ;
