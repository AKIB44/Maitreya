

// const serviceItems = [
//     {
//         icon: <Utensils size={40} className="text-resort-gold" />,
//         title: 'Fine Dining',
//         description: 'Experience exquisite culinary delights prepared by our world-class chefs using local ingredients.'
//     },
//     {
//         icon: <Wifi size={40} className="text-resort-gold" />,
//         title: 'High-Speed WiFi',
//         description: 'Stay connected with complimentary high-speed internet access throughout the resort premises.'
//     },
//     {   
//         icon: <Coffee size={40} className="text-resort-gold" />,
//         title: 'In-room Service',
//         description: '24/7 in-room dining service catering to your cravings at any hour of the day.'
//     }
// ];

// const Services = () => {
//     return (
//         <section id="services" className="py-20 bg-gradient-to-b from-white to-resort-cream">
//             <div className="resort-container">
//                 <div className="text-center max-w-3xl mx-auto mb-16">
//                     <h2 className="text-sm uppercase tracking-widest text-resort-gold mb-2">Our Offerings</h2>
//                     <h3 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
//                         Exceptional Services for an Unforgettable Stay
//                     </h3>
//                     <p className="text-resort-dark/80">
//                         At Maitreya Resort, we pride ourselves on providing a comprehensive range of premium services
//                         designed to make your stay comfortable, convenient, and truly memorable.
//                     </p>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                     {serviceItems.map((service, index) => (
//                         <div
//                             key={index}
//                             className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-100 hover:border-resort-gold/20"
//                         >
//                             <div className="mb-6">
//                                 {service.icon}
//                             </div>
//                             <h4 className="font-playfair text-xl font-bold mb-3">
//                                 {service.title}
//                             </h4>
//                             <p className="text-resort-dark/70">
//                                 {service.description}
//                             </p>
//                         </div>
//                     ))}
//                 </div>

//                 <div className="mt-12 text-center">
//                     <a href="#rooms" className="btn-secondary">
//                         View Our Accommodations
//                     </a>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Services;

// import React, { useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { Utensils, Wifi, Coffee } from 'lucide-react';
// import WaveDivider from "@/components/waveDivider";

// <WaveDivider flip color="#fef9f6" />

// const serviceItems = [
//     {
//         icon: <Utensils size={40} className="text-resort-gold" />,
//         title: 'Fine Dining',
//         description: 'Experience exquisite culinary delights prepared by our world-class chefs using local ingredients.'
//     },
//     {
//         icon: <Wifi size={40} className="text-resort-gold" />,
//         title: 'High-Speed WiFi',
//         description: 'Stay connected with complimentary high-speed internet access throughout the resort premises.'
//     },
//     {
//         icon: <Coffee size={40} className="text-resort-gold" />,
//         title: 'In-room Service',
//         description: '24/7 in-room dining service catering to your cravings at any hour of the day.'
//     }
// ];

// // Framer Motion variants
// const containerVariants = {
//     hidden: {},
//     visible: {
//         transition: {
//             staggerChildren: 0.2
//         }
//     }
// };

// const cardVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
// };

// const Services = () => {
//     useEffect(() => {
//         const cards = document.querySelectorAll('.group');

//         const handleMouseMove = (e: MouseEvent) => {
//             const target = e.currentTarget as HTMLElement;
//             const rect = target.getBoundingClientRect();
//             const x = ((e.clientX - rect.left) / rect.width) * 100;
//             const y = ((e.clientY - rect.top) / rect.height) * 100;
//             target.style.setProperty('--mouse-x', `${x}%`);
//             target.style.setProperty('--mouse-y', `${y}%`);
//         };

//         cards.forEach(card => {
//             card.addEventListener('mousemove', handleMouseMove);
//         });

//         return () => {
//             cards.forEach(card => {
//                 card.removeEventListener('mousemove', handleMouseMove);
//             });
//         };
//     }, []);

//     return (
//         // <section id="services" className="py-20 bg-gradient-to-b from-white to-resort-cream">
//         <section
//             id="services"
//             className="relative py-20 bg-gradient-to-b from-white to-resort-cream overflow-hidden"
//         >
//             <img
//                 src="/assets/wave-pattern.svg"
//                 alt=""
//                 className="absolute top-0 left-0 w-1/3 opacity-10 pointer-events-none select-none"
//             />

//             <div className="resort-container">
//                 <div className="text-center max-w-3xl mx-auto mb-16">
//                     <h2 className="text-sm uppercase tracking-widest text-resort-gold mb-2">Our Offerings</h2>
//                     <h3 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
//                         Exceptional Services for an Unforgettable Stay
//                     </h3>
//                     <p className="text-resort-dark/80">
//                         At Maitreya Resort, we pride ourselves on providing a comprehensive range of premium services
//                         designed to make your stay comfortable, convenient, and truly memorable.
//                     </p>
//                 </div>

//                 <motion.div
//                     className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//                     variants={containerVariants}
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: true }}
//                 >
//                     {serviceItems.map((service, index) => (
//                         <motion.div
//                             key={index}
//                             variants={cardVariants}
//                             className="relative group bg-white p-8 rounded-lg shadow-lg transition-all duration-300 border border-gray-100 hover:border-resort-gold/20 overflow-hidden"
//                         >
//                             {/* Glow effect */}
//                             <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none">
//                                 <div
//                                     className="absolute w-full h-full rounded-lg"
//                                     style={{
//                                         background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(0,0,0,0.05), transparent 70%)`
//                                     }}
//                                 />
//                             </div>

//                             <div className="mb-6">{service.icon}</div>
//                             <h4 className="font-playfair text-xl font-bold mb-3">
//                                 {service.title}
//                             </h4>
//                             <p className="text-resort-dark/70">{service.description}</p>
//                         </motion.div>
//                     ))}
//                 </motion.div>

//                 <div className="mt-12 text-center">
//                     <a href="#rooms" className="btn-secondary">
//                         View Our Accommodations
//                     </a>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Services;


// import React, { useEffect } from 'react';
// import { motion } from 'framer-motion';
// import Lottie from 'lottie-react';
// import diningAnim from '@/lottie/dining.json';
// import wifiAnim from '@/lottie/wifi.json';
// import roomServiceAnim from '@/lottie/dining.json';
// import poolAnim from '@/lottie/dining.json';
// import parkingAnim from '@/lottie/dining.json';
// import kidsAnim from '@/lottie/dining.json';
// import WaveDivider from '@/components/waveDivider';

// const serviceItems = [
//     {
//         animation: diningAnim,
//         title: 'Fine Dining',
//         description: 'Experience exquisite culinary delights prepared by our world-class chefs using local ingredients.',
//     },
//     {
//         animation: wifiAnim,
//         title: 'High-Speed WiFi',
//         description: 'Stay connected with complimentary high-speed internet access throughout the resort premises.',
//     },
//     {
//         animation: roomServiceAnim,
//         title: 'In-room Service',
//         description: '24/7 in-room dining service catering to your cravings at any hour of the day.',
//     },
//     {
//         animation: poolAnim,
//         title: 'Swimming Pool',
//         description: 'Relax and unwind in our temperature-controlled swimming pool with a beautiful backdrop.',
//     },
//     {
//         animation: parkingAnim,
//         title: 'Parking Facility',
//         description: 'Ample secure parking space available for guests with 24/7 surveillance.',
//     },
//     {
//         animation: kidsAnim,
//         title: 'Kids Play Zone',
//         description: 'Fun-filled safe space for children with rides and games to keep them entertained.',
//     },
// ];

// const containerVariants = {
//     hidden: {},
//     visible: {
//         transition: {
//             staggerChildren: 0.2,
//         },
//     },
// };

// const cardVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
// };

// const Services = () => {
//     useEffect(() => {
//         const cards = document.querySelectorAll('.group');

//         const handleMouseMove = (e: MouseEvent) => {
//             const target = e.currentTarget as HTMLElement;
//             const rect = target.getBoundingClientRect();
//             const x = ((e.clientX - rect.left) / rect.width) * 100;
//             const y = ((e.clientY - rect.top) / rect.height) * 100;
//             target.style.setProperty('--mouse-x', `${x}%`);
//             target.style.setProperty('--mouse-y', `${y}%`);
//         };

//         cards.forEach(card => {
//             card.addEventListener('mousemove', handleMouseMove);
//         });

//         return () => {
//             cards.forEach(card => {
//                 card.removeEventListener('mousemove', handleMouseMove);
//             });
//         };
//     }, []);

//     return (
//         <section id="services" className="py-20 bg-gradient-to-b from-white to-resort-cream">
//             <div className="resort-container">
//                 <div className="text-center max-w-3xl mx-auto mb-16">
//                     <h2 className="text-sm uppercase tracking-widest text-resort-gold mb-2">Our Offerings</h2>
//                     <h3 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
//                         Exceptional Services for an Unforgettable Stay
//                     </h3>
//                     <p className="text-resort-dark/80">
//                         At Maitreya Resort, we pride ourselves on providing a comprehensive range of premium services
//                         designed to make your stay comfortable, convenient, and truly memorable.
//                     </p>
//                 </div>

//                 <motion.div
//                     className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//                     variants={containerVariants}
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: true }}
//                 >
//                     {serviceItems.map((service, index) => (
//                         <motion.div
//                             key={index}
//                             variants={cardVariants}
//                             className="relative group bg-white p-8 rounded-lg shadow-lg transition-all duration-300 border border-gray-100 hover:border-resort-gold/20 overflow-hidden"
//                         >
//                             <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none">
//                                 <div
//                                     className="absolute w-full h-full rounded-lg"
//                                     style={{
//                                         background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(0,0,0,0.05), transparent 70%)`,
//                                     }}
//                                 />
//                             </div>

//                             <div className="mb-6 w-24 h-24 mx-auto">
//                                 <Lottie animationData={service.animation} loop={true} />
//                             </div>
//                             <h4 className="font-playfair text-xl font-bold mb-3 text-center">
//                                 {service.title}
//                             </h4>
//                             <p className="text-resort-dark/70 text-center">{service.description}</p>
//                         </motion.div>
//                     ))}
//                 </motion.div>

//                 <div className="mt-12 text-center">
//                     <a href="#rooms" className="btn-secondary">
//                         View Our Accommodations
//                     </a>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Services;



import { useEffect } from "react";
import { motion } from "framer-motion";
import WaveDivider from "@/components/waveDivider";
import { Utensils, Wifi, Coffee, Car, Waves, Smile } from 'lucide-react';

const serviceItems = [
    {
        icon: <Utensils size={40} className="text-resort-gold" />,
        title: "Fine Dining",
        description: "Experience culinary excellence with locally inspired dishes made by top chefs."
    },
    {
        icon: <Wifi size={40} className="text-resort-gold" />,
        title: "High-Speed WiFi",
        description: "Stay connected at lightning-fast speeds throughout the resort."
    },
    {
        icon: <Coffee size={40} className="text-resort-gold" />,
        title: "In-room Service",
        description: "Order anytime. Fresh meals and beverages at your convenience."
    },
    {
        icon: <Waves size={40} className="text-resort-gold" />,
        title: "Swimming Pool",
        description: "Enjoy our beautifully designed pool with lush surroundings."
    },
    {
        icon: <Car size={40} className="text-resort-gold" />,
        title: "Parking Facility",
        description: "Safe, convenient parking for all our valued guests."
    },
    {
        icon: <Smile size={40} className="text-resort-gold" />,
        title: "Kids Play Zone",
        description: "A fun-filled area for our little guests to laugh and enjoy safely."
    }
];



// Animation
const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const Services = () => {
    useEffect(() => {
        const cards = document.querySelectorAll(".service-card");

        const handleMouseMove = (e: MouseEvent) => {
            const card = e.currentTarget as HTMLElement;
            const rect = card.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            card.style.setProperty("--mouse-x", `${x}%`);
            card.style.setProperty("--mouse-y", `${y}%`);
        };

        cards.forEach(card => {
            card.addEventListener("mousemove", handleMouseMove);
        });

        return () => {
            cards.forEach(card => {
                card.removeEventListener("mousemove", handleMouseMove);
            });
        };
    }, []);

    return (
        <section id="services" className="py-20 bg-white">
            <div className="resort-container">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-sm uppercase tracking-widest text-resort-gold mb-2">Our Offerings</h2>
                    <h3 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
                        Premium Services for Unforgettable Memories
                    </h3>
                    <p className="text-resort-dark/80">
                        Discover a range of luxurious amenities designed to elevate your stay at Maitreya Resort.
                    </p>
                </div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {serviceItems.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className="service-card relative group bg-white border border-gray-100 p-8 rounded-lg shadow-md hover:shadow-lg transition-all overflow-hidden hover:scale-105"
                        >
                            {/* Dynamic glow */}
                            <div
                                className="absolute inset-0 pointer-events-none rounded-lg"
                                style={{
                                    background: "radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(253, 224, 71, 0.15), transparent 60%)",
                                    transition: "background 0.3s"
                                }}
                            />
                            {/* Actual Card Content */}
                            <div className="relative z-10 space-y-4">
                                <div className="mb-4">{service.icon}</div>
                                <h4 className="font-playfair text-xl font-bold mb-2">{service.title}</h4>
                                <p className="text-resort-dark/70 text-sm">{service.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="mt-12 text-center">
                    <a href="#rooms" className="btn-secondary">
                        Explore Our Rooms
                    </a>
                </div>
            </div>

            {/* Optional Decorative Wave */}
            {/* <WaveDivider flip color="#fef9f6" /> */}
        </section>
    );
};

export default Services;
