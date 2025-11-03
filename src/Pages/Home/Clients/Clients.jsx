import React from "react";
import { motion } from "framer-motion";

// 👉 তোমার নিজের image import
import client1 from "../../../assets/brands/amazon.png";
import client2 from "../../../assets/brands/amazon_vector.png";
import client3 from "../../../assets/brands/casio.png";
import client4 from "../../../assets/brands/moonstar.png";
import client5 from "../../../assets/brands/randstad.png";
import client6 from "../../../assets/brands/start-people1.png";
import client7 from "../../../assets/brands/start.png";

const clients = [client1, client2, client3, client4, client5, client6, client7];

const Clients = () => {
    // Repeat clients to make continuous loop effect
    const repeatedClients = [...clients, ...clients];

    return (
        <section className="bg-gray-50 py-16 px-6 md:px-12 rounded-3xl mt-10 overflow-hidden">
            <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 border-b-2 border-dashed border-teal-400 inline-block pb-2">
                    Our Clients
                </h2>
            </div>

            <div className="relative w-full overflow-hidden">
                <motion.div
                    className="flex gap-10 items-center"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        duration: 20,
                        ease: "linear",
                    }}
                >
                    {repeatedClients.map((img, index) => (
                        <div
                            key={index}
                            className="bg-white min-w-[160px] md:min-w-[200px] rounded-2xl shadow-md flex justify-center items-center p-4"
                        >
                            <img
                                src={img}
                                alt={`Client ${index + 1}`}
                                className="w-28 md:w-32 object-contain transition-all duration-300"
                            />

                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Clients;
