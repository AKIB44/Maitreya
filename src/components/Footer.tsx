// import React from 'react';
import { Facebook, Twitter, Instagram, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="contact" className="bg-resort-dark text-white">
            <div className="resort-container py-16 animate-fade-in-up duration-1000 delay-200">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* About Column */}
                    <div className="animate-fade-in-up delay-300">
                        <div className="mb-6">
                            <a href="/" className="flex items-center">
                                <div className="relative">
                                    <span className="text-2xl font-playfair font-bold text-white">
                                        Maitreya
                                    </span>
                                    <span className="absolute -bottom-2 right-0 text-xs uppercase tracking-widest text-resort-gold">
                                        Resort
                                    </span>
                                </div>
                            </a>
                        </div>
                        <p className="text-white/70 mb-4">
                            Discover luxury and comfort in every detail at Maitreya Resort.
                            Your journey to relaxation and rejuvenation begins here.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-white/70 hover:text-resort-gold transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="text-white/70 hover:text-resort-gold transition-colors">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="text-white/70 hover:text-resort-gold transition-colors">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links Column */}
                    <div className="animate-fade-in-up delay-400">
                        <h4 className="text-lg font-playfair font-bold mb-6 border-b border-white/20 pb-2">
                            Quick Links
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="#home" className="text-white/70 hover:text-resort-gold transition-colors">Home</a>
                            </li>
                            <li>
                                <a href="#about" className="text-white/70 hover:text-resort-gold transition-colors">About Us</a>
                            </li>
                            <li>
                                <a href="#services" className="text-white/70 hover:text-resort-gold transition-colors">Services</a>
                            </li>
                            <li>
                                <a href="#contact" className="text-white/70 hover:text-resort-gold transition-colors">Contact Us</a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div className="animate-fade-in-up delay-500">
                        <h4 className="text-lg font-playfair font-bold mb-6 border-b border-white/20 pb-2">
                            Contact Information
                        </h4>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <MapPin className="mr-3 text-resort-gold shrink-0" size={18} />
                                <span className="text-white/70">At & Post Dive Agar, Suvarna Ganesh pakhadi (Lane), Opp. Wad Bunglow, Tal. Shriwardhan Dist. Raigad, Diveagar, Maharashtra 402404</span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="mr-3 text-resort-gold" size={18} />
                                <a href="tel:+1234567890" className="text-white/70 hover:text-resort-gold transition-colors">
                                    077700 82668
                                </a>
                            </li>
                            <li className="flex items-center">
                                <Mail className="mr-3 text-resort-gold" size={18} />
                                <a href="mailto:info@maitreyaresort.com" className="text-white/70 hover:text-resort-gold transition-colors">
                                    info@maitreyaresort.com
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter and Map Column */}
                    <div className="animate-fade-in-up delay-600">
                        <h4 className="text-lg font-playfair font-bold mb-6 border-b border-white/20 pb-2">
                            Find Us
                        </h4>
                        <div className="rounded-md overflow-hidden shadow-md">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3790.865044795212!2d72.98713047518322!3d18.17012978285679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be84ed39a76e8e3%3A0xd0a697ba823b0092!2sMaitreya%20Beach%20Resort!5e0!3m2!1sen!2sin!4v1744561057828!5m2!1sen!2sin"
                                width="100%"
                                height="300"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Maitreya Beach Resort Location"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="border-t border-white/10 animate-fade-in-up delay-700">
                <div className="resort-container py-6 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-white/60 text-sm">
                        © {new Date().getFullYear()} Maitreya Resort. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="text-white/60 hover:text-resort-gold text-sm transition-colors">Privacy Policy</a>
                        <a href="#" className="text-white/60 hover:text-resort-gold text-sm transition-colors">Terms of Service</a>
                        <a href="#" className="text-white/60 hover:text-resort-gold text-sm transition-colors">Sitemap</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
