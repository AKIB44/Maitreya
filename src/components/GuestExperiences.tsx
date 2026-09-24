import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Quote } from 'lucide-react';

import guestVisit1 from '@/assets/Guest_Visit_1.jpg';
import guestVisit2 from '@/assets/Guest_Visit_2.jpg';
import guestVisit3 from '@/assets/Guest_Visit_3.jpg';

const guestExperiences = [
    {
        image: guestVisit1,
        name: 'Weekend Getaway Group',
        quote: 'A memorable stay right by the beach — warm hospitality and a beautifully lit property at night.',
    },
    {
        image: guestVisit2,
        name: 'College Friends Trip',
        quote: 'Had an amazing time with the whole group. Great rooms, great vibes, and a resort we\'ll never forget.',
    },
    {
        image: guestVisit3,
        name: 'Family & Friends Reunion',
        quote: 'Perfect place for a big group gathering. Everyone had a wonderful time exploring Diveagar from here.',
    },
];

const GuestExperiences = () => {
    return (
        <section id="guest-experiences" className="py-20 bg-resort-cream overflow-hidden">
            <div className="resort-container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-12"
                >
                    <h2 className="text-sm uppercase tracking-widest text-resort-gold mb-2">Guest Experiences</h2>
                    <h3 className="font-playfair text-3xl md:text-4xl font-bold mb-6 text-resort-dark">
                        Moments Shared By Our Guests
                    </h3>
                    <p className="text-resort-dark/80">
                        Take a look at some of the wonderful groups and travelers who have visited Maitreya Beach Resort
                        and made memories with us.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={24}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 4000 }}
                        breakpoints={{
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="guest-experiences-swiper pb-12"
                    >
                        {guestExperiences.map((guest, index) => (
                            <SwiperSlide key={index}>
                                <div className="bg-white rounded-lg shadow-lg overflow-hidden group h-full">
                                    <div className="overflow-hidden">
                                        <img
                                            src={guest.image}
                                            alt={guest.name}
                                            className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <Quote className="text-resort-gold mb-3" size={24} />
                                        <p className="text-resort-dark/80 mb-4">{guest.quote}</p>
                                        <p className="font-playfair font-semibold text-resort-dark">{guest.name}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>
            </div>
        </section>
    );
};

export default GuestExperiences;
