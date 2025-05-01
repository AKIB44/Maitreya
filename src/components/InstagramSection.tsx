import React, { useEffect } from "react";
import { motion } from "framer-motion";

const InstagramSection = () => {

    // Fix iframe overflow dynamically
    useEffect(() => {
        const interval = setInterval(() => {
            const iframe = document.querySelector('iframe[src*="elfsight.com"]') as HTMLIFrameElement;
            if (iframe) {
                iframe.style.width = "100%";
                iframe.style.maxWidth = "1200px"; // ✨ Don't exceed container
                iframe.style.height = "auto";
                iframe.style.overflow = "hidden";
                iframe.style.borderRadius = "10px"; // optional curve
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="instagram" className="py-20 bg-resort-light overflow-hidden">
            <motion.div
                className="resort-container text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h2 className="text-sm uppercase tracking-widest text-resort-gold mb-2">
                    Stay Connected
                </h2>
                <h3 className="font-playfair text-3xl md:text-4xl font-bold mb-8 text-resort-dark">
                    Follow Our Latest Moments
                </h3>

                <div className="flex justify-center">
                    <div className="w-full max-w-5xl mx-auto relative overflow-hidden">
                        <div className="elfsight-app-4eeb0faf-82a8-4f39-8e9f-fdac1c60dd41" />
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default InstagramSection;
