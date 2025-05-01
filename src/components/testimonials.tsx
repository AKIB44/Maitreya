// import React from 'react';
// import { motion } from 'framer-motion';
// import { Star } from 'lucide-react';

// const testimonials = [
//     {
//         name: "Aarav Patel",
//         text: "A truly magical experience! The beachside location made our anniversary unforgettable.",
//         rating: 5,
//     },
//     {
//         name: "Sneha Joshi",
//         text: "Peaceful ambiance, phenomenal food. Loved the seafood platter!",
//         rating: 4,
//     },
//     {
//         name: "Rohit Verma",
//         text: "Perfect for families. Kids loved the pool and rain dance. Clean rooms!",
//         rating: 5,
//     },
//     {
//         name: "Meera Iyer",
//         text: "Affordable luxury. A serene getaway that rejuvenated us!",
//         rating: 5,
//     },
//     {
//         name: "Nikhil Sharma",
//         text: "The spa, the food, the views—everything exceeded expectations.",
//         rating: 4,
//     },
//     {
//         name: "Priya Desai",
//         text: "Great location and service. The coffee shop was a daily ritual!",
//         rating: 4,
//     }
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

// const Testimonials = () => {
//     return (
//         <section
//             id="testimonials"
//             className="relative w-full py-20 bg-cover bg-center bg-no-repeat"
//             style={{
//                 backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80')`,
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//             }}
//         >

//             {/* Optional soft overlay */}
//             {/* <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-0"></div> */}

//             <div className="resort-container relative z-10">
//                 <div className="text-center max-w-3xl mx-auto mb-16">
//                     <h2 className="text-sm uppercase tracking-widest text-resort-gold mb-2">What Guests Say</h2>
//                     <h3 className="font-playfair text-3xl md:text-4xl font-bold mb-6 text-resort-dark">
//                         Real Experiences, Real Smiles
//                     </h3>
//                     <p className="text-resort-dark/80">
//                         Hear from our guests who have stayed and experienced the Maitreya touch.
//                     </p>
//                 </div>

//                 <motion.div
//                     variants={containerVariants}
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: true, amount: 0.2 }}
//                     className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
//                 >
//                     {testimonials.map((review, index) => (
//                         <motion.div
//                             key={index}
//                             variants={cardVariants}
//                             className="relative bg-white border border-gray-100 rounded-xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 group overflow-hidden"
//                         >
//                             <div className="absolute inset-0 bg-gradient-to-br from-resort-gold/10 to-resort-cream/10 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none rounded-xl" />
//                             <p className="text-resort-dark/80 mb-4 italic">"{review.text}"</p>
//                             <div className="flex items-center mb-2">
//                                 {[...Array(review.rating)].map((_, i) => (
//                                     <Star key={i} size={16} className="text-resort-gold fill-resort-gold mr-1" />
//                                 ))}
//                             </div>
//                             <p className="text-sm text-resort-dark font-medium">— {review.name}</p>
//                         </motion.div>
//                     ))}
//                 </motion.div>
//             </div>
//         </section>
//     );
// };

// export default Testimonials;

// import React from 'react';
// import { motion } from 'framer-motion';
// import { Star } from 'lucide-react';

// const testimonials = [
//     {
//         name: "Aarav Patel",
//         text: "A truly magical experience! The beachside location made our anniversary unforgettable.",
//         rating: 5,
//     },
//     {
//         name: "Sneha Joshi",
//         text: "Peaceful ambiance, phenomenal food. Loved the seafood platter!",
//         rating: 4,
//     },
//     {
//         name: "Rohit Verma",
//         text: "Perfect for families. Kids loved the pool and rain dance. Clean rooms!",
//         rating: 5,
//     },
//     {
//         name: "Meera Iyer",
//         text: "Affordable luxury. A serene getaway that rejuvenated us!",
//         rating: 5,
//     },
//     {
//         name: "Nikhil Sharma",
//         text: "The spa, the food, the views—everything exceeded expectations.",
//         rating: 4,
//     },
//     {
//         name: "Priya Desai",
//         text: "Great location and service. The coffee shop was a daily ritual!",
//         rating: 4,
//     }
// ];

// const containerVariants = {
//     hidden: {},
//     visible: {
//         transition: {
//             staggerChildren: 0.15,
//         },
//     },
// };

// const cardVariants = {
//     hidden: { opacity: 0, y: 40 },
//     visible: {
//         opacity: 1,
//         y: 0,
//         transition: {
//             duration: 0.6,
//             ease: [0.25, 0.8, 0.25, 1] // easeOutQuart-like feel
//         }
//     }
// };

// const Testimonials = () => {
//     return (
//         <section
//             id="testimonials"
//             className="relative w-full py-16 sm:py-20 bg-cover bg-center bg-no-repeat overflow-hidden"
//             style={{
//                 backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80')`,
//             }}
//         >
//             {/* Optional white overlay */}
//             {/* <div className="absolute inset-0 bg-white/90 backdrop-blur-md z-0"></div> */}

//             <div className="resort-container relative z-10 px-4 sm:px-6 lg:px-8">
//                 <div className="text-center max-w-3xl mx-auto mb-12">
//                     <h2 className="text-sm uppercase tracking-widest text-resort-gold mb-2">What Guests Say</h2>
//                     <h3 className="font-playfair text-3xl md:text-4xl font-bold mb-6 text-resort-dark">
//                         Real Experiences, Real Smiles
//                     </h3>
//                     <p className="text-resort-dark/80">
//                         Hear from our guests who have stayed and experienced the Maitreya touch.
//                     </p>
//                 </div>

//                 <motion.div
//                     variants={containerVariants}
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: true, amount: 0.2 }}
//                     className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
//                 >
//                     {testimonials.map((review, index) => (
//                         <motion.div
//                             key={index}
//                             variants={cardVariants}
//                             layout
//                             className="relative bg-white border border-gray-100 rounded-xl p-5 md:p-6 shadow-md hover:shadow-xl transition-shadow duration-300 group overflow-hidden"
//                         >
//                             <div className="absolute inset-0 bg-gradient-to-br from-resort-gold/10 to-resort-cream/10 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none rounded-xl" />
//                             <p className="text-resort-dark/80 mb-4 italic text-base leading-relaxed">"{review.text}"</p>
//                             <div className="flex items-center mb-2">
//                                 {[...Array(review.rating)].map((_, i) => (
//                                     <Star key={i} size={16} className="text-resort-gold fill-resort-gold mr-1" />
//                                 ))}
//                             </div>
//                             <p className="text-sm text-resort-dark font-medium">— {review.name}</p>
//                         </motion.div>
//                     ))}
//                 </motion.div>
//             </div>
//         </section>
//     );
// };

// export default Testimonials;

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
    useEffect(() => {
        if (!document.querySelector("script[src='https://apps.elfsight.com/p/platform.js']")) {
            const script = document.createElement("script");
            script.src = "https://apps.elfsight.com/p/platform.js";
            script.defer = true;
            document.body.appendChild(script);
        }
    }, []);

    return (
        <section
            id="testimonials"
            className="relative w-full py-20 bg-cover bg-center bg-no-repeat overflow-hidden"
            style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80')`,
            }}
        >
            <div className="resort-container relative z-10 px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-sm uppercase tracking-widest text-resort-gold mb-2">What Guests Say</h2>
                    <h3 className="font-playfair text-3xl md:text-4xl font-bold mb-6 text-resort-dark">
                        Real Experiences, Real Smiles
                    </h3>
                    <p className="text-resort-dark/80">
                        Reviews from Google by our delighted guests.
                    </p>
                </div>

                {/* <script src="https://static.elfsight.com/platform/platform.js" async></script> */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: true }}
                >
                    <div className="elfsight-app-9445a897-e2f4-45fe-9ff8-1876e0c20d85" />
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
