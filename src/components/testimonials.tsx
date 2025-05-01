

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
