import React from 'react';
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
    return (
        <section
            className="py-24 relative bg-cover bg-center"
            style={{
                backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&q=80)'
            }}
        >
            <div className="resort-container">
                <div className="max-w-3xl mx-auto text-center text-white">
                    <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
                        Experience the Luxury of Maitreya Resort Today
                    </h2>

                    <p className="text-lg opacity-90 mb-8">
                        Book your stay now and unlock exclusive offers including complimentary
                        breakfast, spa credits, and more. Limited time offer for new guests.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                        {/* <a href="#book-now" className="btn-primary">
                            Reserve Your Room
                            <ArrowRight className="ml-2" size={18} />
                        </a> */}
                        <a href="#contact" className="btn-secondary">
                            Contact Us
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
