
import React, { useState, useEffect } from 'react';
import lobbyImage from '@/assets/lobby.jpeg';
import { motion } from 'framer-motion';
import WaveDivider from '@/components/waveDivider';

const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.2,
            duration: 0.6,
            ease: 'easeOut'
        }
    })
};

const AboutSection = () => {
    const [imgLoaded, setImgLoaded] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [years, setYears] = useState(0);
    const [rooms, setRooms] = useState(0);
    const [guests, setGuests] = useState(0);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({
                x: (e.clientX / window.innerWidth - 0.5) * 5,
                y: (e.clientY / window.innerHeight - 0.5) * 5,
            });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    useEffect(() => {
        // Animate numbers when loaded
        const animateValue = (setFn: (val: number) => void, target: number, duration = 1000) => {
            let start = 0;
            const increment = target / (duration / 10);
            const step = () => {
                start += increment;
                if (start < target) {
                    setFn(Math.ceil(start));
                    setTimeout(step, 10);
                } else {
                    setFn(target);
                }
            };
            step();
        };

        animateValue(setYears, 15);
        animateValue(setRooms, 45);
        animateValue(setGuests, 5000);
    }, []);

    return (
        <section id="about" className="py-20 bg-resort-light overflow-hidden relative">
            <div className="resort-container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Text Section */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        className="space-y-6"
                    >
                        <motion.h2
                            variants={fadeInUp}
                            custom={1}
                            className="text-sm uppercase tracking-widest text-resort-gold mb-2"
                        >
                            About Maitreya
                        </motion.h2>

                        <motion.h3
                            variants={fadeInUp}
                            custom={2}
                            className="font-playfair text-3xl md:text-4xl font-bold mb-6 text-resort-dark"
                        >
                            Where Coastal Charm <br /> Meets Luxury Living
                        </motion.h3>

                        <motion.p variants={fadeInUp} custom={3}>
                            Located in the picturesque town of Diveagar, Maharashtra, Maitreya Resort offers the perfect
                            blend of nature, serenity, and modern elegance...
                        </motion.p>

                        <motion.p variants={fadeInUp} custom={4}>
                            With 45 beautifully designed rooms, a sparkling swimming pool, and cozy coffee spaces,
                            we create experiences that are truly unforgettable.
                        </motion.p>

                        <motion.p variants={fadeInUp} custom={5}>
                            Our warm hospitality and attention to detail have made us a favorite among travelers worldwide.
                        </motion.p>

                        <motion.div
                            variants={fadeInUp}
                            custom={6}
                            className="mt-8 flex flex-col sm:flex-row gap-6"
                        >
                            <div className="border-l-4 border-resort-gold pl-4 py-2">
                                <h4 className="font-bold text-3xl font-playfair">{years}+</h4>
                                <p className="text-sm text-resort-dark/70">Years of Hospitality</p>
                            </div>
                            <div className="border-l-4 border-resort-gold pl-4 py-2">
                                <h4 className="font-bold text-3xl font-playfair">{rooms}+</h4>
                                <p className="text-sm text-resort-dark/70">Elegant Rooms</p>
                            </div>
                            <div className="border-l-4 border-resort-gold pl-4 py-2">
                                <h4 className="font-bold text-3xl font-playfair">{guests}+</h4>
                                <p className="text-sm text-resort-dark/70">Happy Guests</p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Image Section */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={fadeInUp}
                        custom={3}
                        className="relative overflow-hidden rounded-lg shadow-xl group"
                        style={{
                            transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
                            transition: 'transform 0.2s ease-out',
                        }}
                    >
                        <motion.img
                            src={lobbyImage}
                            alt="Maitreya Resort View"
                            className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                            onLoad={() => setImgLoaded(true)}
                            loading="lazy"
                            initial={{ scale: 1.05, opacity: 0 }}
                            animate={{ scale: imgLoaded ? 1 : 1.05, opacity: imgLoaded ? 1 : 0 }}
                            transition={{ duration: 1 }}
                        />

                        {/* Decorative Layers */}
                        <div className="absolute -bottom-6 -right-6 w-3/4 h-3/4 bg-resort-gold/10 rounded-lg -z-10"></div>
                        <div className="absolute -top-6 -left-6 w-3/5 h-2/5 border-2 border-resort-gold/30 rounded-lg -z-10"></div>
                    </motion.div>
                </div>
            </div>

            {/* Decorative Wave Divider */}
            {/* <div className="mt-12">
                <WaveDivider color="#fef9f6" />
            </div> */}
        </section>
    );
};

export default AboutSection;

