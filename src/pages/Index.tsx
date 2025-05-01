
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import Services from '@/components/Services';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import WaveDivider from "@/components/waveDivider";
import Testimonials from "@/components/testimonials";
import ScrollToHash from "@/components/scrollToHash";
import InstagramSection from "@/components/InstagramSection";


const Index = () => {
    useEffect(() => {
        document.title = "Maitreya Beach Resort";
    }, []);

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
                <ScrollToHash />
                <Hero />
                <AboutSection />
                <WaveDivider flip color="#fef9f6" />
                <Services />
                <Testimonials />
                <InstagramSection />
                <CallToAction />
            </main>
            <Footer />
        </div>
    );
};

export default Index;