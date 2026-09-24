
/// Update hero section ////

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowRight } from 'lucide-react';
import heroVideo1 from '@/assets/Hero_Video_1.mp4';
import heroVideo2 from '@/assets/Hero_Video_2.mp4';
import heroPoster1 from '@/assets/Hero_Video_1_poster.jpg';
import heroPoster2 from '@/assets/Hero_Video_2_poster.jpg';

const videos = [
    { src: heroVideo1, poster: heroPoster1 },
    { src: heroVideo2, poster: heroPoster2 },
];
const VIDEO_SWITCH_INTERVAL = 12000; // ⏱ 12 seconds

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, delay }
    }),
};

const fadeInUpThenOut = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, delay }
    }),
    faded: {
        opacity: 0,
        transition: { duration: 1.5, ease: 'easeInOut' }
    },
};

const Hero = () => {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const [showText, setShowText] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
        }, VIDEO_SWITCH_INTERVAL);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const fadeTimer = setTimeout(() => setShowText(false), 3000);
        return () => clearTimeout(fadeTimer);
    }, []);

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* 🔁 Multiple Background Videos with fade */}
            {videos.map((video, idx) => (
                <video
                    key={idx}
                    className={`absolute top-0 left-0 w-full h-full object-cover z-0 transition-opacity duration-1000 ${idx === currentVideoIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                    src={video.src}
                    poster={video.poster}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                />
            ))}

            {/* 🌓 Dark Overlay */}
            <div className="absolute inset-0 bg-black/50 z-10" />

            {/* 🎯 Content */}
            <div className="resort-container relative z-20 pt-64 text-white text-center">
                <motion.div
                    className="max-w-3xl mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >

                    <motion.h1
                        className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                        variants={fadeInUpThenOut}
                        custom={0.2}
                        initial="hidden"
                        animate={showText ? "visible" : "faded"}
                    >
                        Where Luxury Meets Tranquility
                    </motion.h1>

                    <motion.p
                        className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto"
                        variants={fadeInUpThenOut}
                        custom={0.3}
                        initial="hidden"
                        animate={showText ? "visible" : "faded"}
                    >
                        Experience the perfect blend of comfort, luxury, and nature at Maitreya Beach Resort.
                        Your gateway to unforgettable memories and rejuvenating escapes.
                    </motion.p>

                    <motion.div className="flex justify-center gap-4" variants={fadeInUp} custom={0.4}>
                        <a href="#services" className="btn-secondary">
                            <span>Explore Our Services</span>
                            <ArrowRight className="ml-2" size={18} />
                        </a>
                    </motion.div>
                </motion.div>
            </div>


        </section>
    );
};

export default Hero;


// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import { Star, ArrowRight } from 'lucide-react';

// const videos = [
//     'https://maitreya-resort.s3.ap-south-1.amazonaws.com/Intro_1.mov',
//     'https://maitreya-resort.s3.ap-south-1.amazonaws.com/Intro_2.mp4'
// ];

// const VIDEO_SWITCH_INTERVAL = 12000;

// const fadeInUp = {
//     hidden: { opacity: 0, y: 30 },
//     visible: (delay = 0) => ({
//         opacity: 1,
//         y: 0,
//         transition: { duration: 0.8, delay }
//     }),
// };

// const Hero = () => {
//     const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
//         }, VIDEO_SWITCH_INTERVAL);
//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <section id="home" className="relative min-h-screen flex items-center justify-start overflow-hidden">
//             {/* 🎥 Background Videos */}
//             {videos.map((src, idx) => (
//                 <video
//                     key={idx}
//                     className={`absolute top-0 left-0 w-full h-full object-cover z-0 transition-opacity duration-1000 ${idx === currentVideoIndex ? 'opacity-100' : 'opacity-0'}`}
//                     src={src}
//                     autoPlay
//                     loop
//                     muted
//                     playsInline
//                     preload="auto"
//                 />
//             ))}

//             {/* Overlay */}
//             <div className="absolute inset-0 bg-black/50 z-10" />

//             {/* Content Left */}
//             <div className="resort-container relative z-20 pt-24 text-white text-left max-w-3xl">
//                 <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
//                     {/* Rating */}
//                     <motion.div
//                         className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8"
//                         variants={fadeInUp}
//                         custom={0.1}
//                     >
//                         <span className="text-white/90 mr-2">Google Rating</span>
//                         <span className="font-semibold mr-2">4.1</span>
//                         <div className="flex">
//                             {[1, 2, 3, 4].map((star) => (
//                                 <Star key={star} size={16} className="text-resort-gold fill-resort-gold" />
//                             ))}
//                         </div>
//                         <span className="ml-2 text-sm text-white/80">Based on 800+ Reviews</span>
//                     </motion.div>

//                     {/* Heading */}
//                     <motion.h1
//                         className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
//                         variants={fadeInUp}
//                         custom={0.2}
//                     >
//                         Welcome To The Place Where Luxury Meets Tranquility
//                     </motion.h1>

//                     {/* Description */}
//                     <motion.p
//                         className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl"
//                         variants={fadeInUp}
//                         custom={0.3}
//                     >
//                         Experience the perfect blend of comfort, luxury, and nature at Maitreya Resort.
//                         Your gateway to unforgettable memories and rejuvenating escapes.
//                     </motion.p>

//                     {/* CTA */}
//                     <motion.div className="flex gap-4" variants={fadeInUp} custom={0.4}>
//                         <a href="#services" className="btn-secondary">
//                             <span>Explore Our Services</span>
//                             <ArrowRight className="ml-2" size={18} />
//                         </a>
//                     </motion.div>
//                 </motion.div>
//             </div>
//         </section>
//     );
// };

// export default Hero;

