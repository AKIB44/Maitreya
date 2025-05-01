// import React, { useState, useEffect } from 'react';
// import { Menu, X } from 'lucide-react';
// import { cn } from '@/lib/utils';
// import { Link } from 'react-router-dom';
// import ThemeToggle from './themeToggle';


// const Navbar = () => {  
//     const [isScrolled, setIsScrolled] = useState(false);
//     const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//     useEffect(() => {
//         const handleScroll = () => {
//             setIsScrolled(window.scrollY > 10);
//         };

//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     return (
//         <header
//             className={cn(
//                 'fixed top-0 left-0 w-full z-50 transition-all duration-300',
//                 isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
//             )}
//         >
//             <div className="resort-container flex items-center justify-between">
//                 <div className="flex items-center">
//                     <Link to="/" className="flex items-center">
//                         <div className="relative">
//                             <span className="text-2xl md:text-3xl font-playfair font-bold text-resort-dark">
//                                 Maitreya
//                             </span>
//                             <span className="absolute -bottom-2 right-0 text-xs uppercase tracking-widest text-resort-gold">
//                                 Resort
//                             </span>
//                         </div>
//                     </Link>
//                 </div>

//                 {/* Desktop Navigation */}
//                 <nav className="hidden lg:flex items-center space-x-8">
//                     <a href="/#home" className="nav-link">Home</a>
//                     <a href="/#about" className="nav-link">About Us</a>
//                     <a href="/#services" className="nav-link">Services</a>
//                     <Link to="/rooms" className="nav-link">Rooms</Link>
//                     <Link to="/gallery" className="nav-link">Gallery</Link>
//                     <a href="/#contact" className="nav-link">Contact Us</a>
//                 </nav>

//                 {/* Mobile menu button */}
//                 <button
//                     className="lg:hidden text-resort-dark"
//                     onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//                 >
//                     {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//                 </button>
//             </div>

//             {/* Mobile Navigation */}
//             {mobileMenuOpen && (
//                 <nav className="lg:hidden bg-white border-t mt-2 py-4 animate-fade-in">
//                     <div className="resort-container flex flex-col space-y-4">
//                         <a href="/#home" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Home</a>
//                         <a href="/#about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>About Us</a>
//                         <a href="/#services" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Services</a>
//                         <Link to="/rooms" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Rooms</Link>
//                         <Link to="/gallery" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Gallery</Link>
//                         <a href="/#contact" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Contact Us</a>
//                         {/* <div className="pt-4 mt-2 border-t border-gray-100">
//                             <a
//                                 href="#book-now"
//                                 className="btn-primary w-full flex justify-center"
//                                 onClick={() => setMobileMenuOpen(false)}
//                             >
//                                 Book Now
//                             </a>
//                         </div> */}
//                     </div>
//                 </nav>
//             )}
//         </header>
//     );
// };

// export default Navbar;

// import React, { useState, useEffect } from 'react';
// import { Menu, X } from 'lucide-react';
// import { cn } from '@/lib/utils';
// import { Link } from 'react-router-dom';
// import ThemeToggle from './themeToggle';

// const Navbar = () => {
//     const [isScrolled, setIsScrolled] = useState(false);
//     const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//     const [scrollProgress, setScrollProgress] = useState(0);

//     useEffect(() => {
//         const handleScroll = () => {
//             setIsScrolled(window.scrollY > 10);

//             const scrollTop = window.scrollY;
//             const docHeight = document.documentElement.scrollHeight - window.innerHeight;
//             const scrollPercent = (scrollTop / docHeight) * 100;
//             setScrollProgress(scrollPercent);
//         };

//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     return (
//         <header
//             className={cn(
//                 'fixed top-0 left-0 w-full z-50 transition-all duration-300',
//                 isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
//             )}
//         >
//             {/* Scroll Progress Indicator */}
//             <div className="fixed top-0 left-0 h-1 bg-resort-gold z-[60] transition-all duration-300" style={{ width: `${scrollProgress}%` }}></div>

//             <div className="resort-container flex items-center justify-between">
//                 <div className="flex items-center">
//                     <Link to="/" className="flex items-center">
//                         <div className="relative">
//                             <span className={cn("text-2xl md:text-3xl font-playfair font-bold transition-colors duration-300", isScrolled ? "text-resort-dark" : "text-white")}>Maitreya</span>
//                             <span className="absolute -bottom-2 right-0 text-xs uppercase tracking-widest text-resort-gold">
//                                 Resort
//                             </span>
//                         </div>
//                     </Link>
//                 </div>

//                 {/* Desktop Navigation */}
//                 <nav className="hidden lg:flex items-center space-x-8">
//                     <a href="/#home" className={cn("nav-link", isScrolled ? "text-resort-dark" : "text-white")}>Home</a>
//                     <a href="/#about" className={cn("nav-link", isScrolled ? "text-resort-dark" : "text-white")}>About Us</a>
//                     <a href="/#services" className={cn("nav-link", isScrolled ? "text-resort-dark" : "text-white")}>Services</a>
//                     <Link to="/rooms" className={cn("nav-link", isScrolled ? "text-resort-dark" : "text-white")}>Rooms</Link>
//                     <Link to="/gallery" className={cn("nav-link", isScrolled ? "text-resort-dark" : "text-white")}>Gallery</Link>
//                     <a href="/#contact" className={cn("nav-link", isScrolled ? "text-resort-dark" : "text-white")}>Contact Us</a>
//                     <ThemeToggle />
//                 </nav>

//                 {/* Mobile menu button */}
//                 <button
//                     className={cn("lg:hidden transition-colors", isScrolled ? "text-resort-dark" : "text-white")}
//                     onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//                 >
//                     {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//                 </button>
//             </div>

//             {/* Mobile Navigation */}
//             {mobileMenuOpen && (
//                 <nav className="lg:hidden bg-white border-t mt-2 py-4 animate-fade-in">
//                     <div className="resort-container flex flex-col space-y-4">
//                         <a href="/#home" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Home</a>
//                         <a href="/#about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>About Us</a>
//                         <a href="/#services" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Services</a>
//                         <Link to="/rooms" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Rooms</Link>
//                         <Link to="/gallery" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Gallery</Link>
//                         <a href="/#contact" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Contact Us</a>
//                         <ThemeToggle />
//                     </div>
//                 </nav>
//             )}
//         </header>
//     );
// };

// export default Navbar;


// import React, { useEffect, useState } from 'react';
// import { Menu, X } from 'lucide-react';
// import { cn } from '@/lib/utils';
// import { Link, useLocation } from 'react-router-dom';
// import ThemeToggle from './themeToggle';

// const Navbar = () => {
//     const [isScrolled, setIsScrolled] = useState(false);
//     const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//     const [scrollProgress, setScrollProgress] = useState(0);
//     const location = useLocation();

//     useEffect(() => {
//         const handleScroll = () => {
//             const scrollTop = window.scrollY;
//             const docHeight = document.documentElement.scrollHeight - window.innerHeight;
//             const scrollPercent = (scrollTop / docHeight) * 100;

//             setIsScrolled(scrollTop > 10);
//             setScrollProgress(scrollPercent);
//         };

//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     const linkClass = isScrolled ? "text-resort-dark hover:text-resort-gold" : "text-white hover:text-resort-gold";

//     return (
//         <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
//             {/* 🔥 Scroll Progress Bar */}
//             <div
//                 className="absolute bottom-0 left-0 h-[3px] bg-resort-gold z-50 transition-all duration-300"
//                 style={{ width: `${scrollProgress}%` }}
//             ></div>

//             <div className={cn(
//                 "transition-all duration-300 w-full",
//                 isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
//             )}>
//                 <div className="resort-container flex items-center justify-between">
//                     {/* Logo */}
//                     <Link to="/" className="flex items-center">
//                         <div className="relative">
//                             <span className={cn("text-2xl md:text-3xl font-playfair font-bold", linkClass)}>Maitreya</span>
//                             <span className="absolute -bottom-2 right-0 text-xs uppercase tracking-widest text-resort-gold">
//                                 Resort
//                             </span>
//                         </div>
//                     </Link>

//                     {/* Desktop Nav */}
//                     <nav className="hidden lg:flex items-center space-x-8">
//                         <a href="/#home" className={cn("nav-link", linkClass)}>Home</a>
//                         <a href="/#about" className={cn("nav-link", linkClass)}>About Us</a>
//                         <a href="/#services" className={cn("nav-link", linkClass)}>Services</a>
//                         <Link to="/rooms" className={cn("nav-link", linkClass)}>Rooms</Link>
//                         <Link to="/gallery" className={cn("nav-link", linkClass)}>Gallery</Link>
//                         <a href="/#contact" className={cn("nav-link", linkClass)}>Contact Us</a>
//                         <ThemeToggle />
//                     </nav>

//                     {/* Mobile menu button */}
//                     <button
//                         className={cn("lg:hidden transition-colors", linkClass)}
//                         onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//                     >
//                         {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//                     </button>
//                 </div>
//             </div>

//             {/* Mobile Nav */}
//             {mobileMenuOpen && (
//                 <nav className="lg:hidden bg-white border-t mt-2 py-4 animate-fade-in">
//                     <div className="resort-container flex flex-col space-y-4">
//                         <a href="/#home" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Home</a>
//                         <a href="/#about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>About Us</a>
//                         <a href="/#services" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Services</a>
//                         <Link to="/rooms" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Rooms</Link>
//                         <Link to="/gallery" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Gallery</Link>
//                         <a href="/#contact" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Contact Us</a>
//                         <ThemeToggle />
//                     </div>
//                 </nav>
//             )}
//         </header>
//     );
// };

// export default Navbar;

// import React, { useEffect, useState } from 'react';
// import { Menu, X } from 'lucide-react';
// import { cn } from '@/lib/utils';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import ThemeToggle from './themeToggle';


// const Navbar = () => {
//     const [isScrolled, setIsScrolled] = useState(false);
//     const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//     const [scrollProgress, setScrollProgress] = useState(0);
//     const location = useLocation();
//     const navigate = useNavigate();

//     useEffect(() => {
//         let ticking = false;

//         const updateScrollProgress = () => {
//             const scrollTop = window.scrollY;
//             const docHeight = document.documentElement.scrollHeight - window.innerHeight;
//             const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
//             setScrollProgress(scrollPercent);
//             ticking = false;
//         };

//         const handleScroll = () => {
//             setIsScrolled(window.scrollY > 10);

//             if (!ticking) {
//                 window.requestAnimationFrame(updateScrollProgress);
//                 ticking = true;
//             }
//         };

//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);


//     const scrollToSection = (id: string) => {
//         const el = document.getElementById(id);
//         if (el) {
//             el.scrollIntoView({ behavior: 'smooth' });
//         }
//     };

//     const handleNavLinkClick = (id: string) => {
//         setMobileMenuOpen(false);
//         if (id === 'gallery') {
//             navigate('/gallery');
//             return;
//         }

//         if (location.pathname !== '/') {
//             navigate(`/#${id}`);
//             setTimeout(() => scrollToSection(id), 50);
//         } else {
//             scrollToSection(id);
//         }
//     };

//     const linkClass = isScrolled ? "text-resort-dark hover:text-resort-gold" : "text-white hover:text-resort-gold";

//     return (
//         <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
//             {/* Scroll Progress Bar */}
//             <div
//                 className="absolute bottom-0 left-0 h-[4px] bg-resort-gold z-50"
//                 style={{
//                     width: `${scrollProgress}%`,
//                     transition: 'width 0.2s ease-out'
//                 }}
//             ></div>

//             <div className={cn("transition-all duration-300 w-full", isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4")}>
//                 <div className="resort-container flex items-center justify-between">
//                     {/* Logo */}
//                     <Link to="/" className="flex items-center">
//                         <div className="relative">
//                             <span className={cn("text-2xl md:text-3xl font-playfair font-bold", linkClass)}>Maitreya</span>
//                             <span className="absolute -bottom-2 right-0 text-xs uppercase tracking-widest text-resort-gold">Resort</span>
//                         </div>
//                     </Link>

//                     {/* Desktop Navigation */}
//                     <nav className="hidden lg:flex items-center space-x-8">
//                         <button onClick={() => handleNavLinkClick('home')} className={cn("nav-link", linkClass)}>Home</button>
//                         <button onClick={() => handleNavLinkClick('about')} className={cn("nav-link", linkClass)}>About Us</button>
//                         <button onClick={() => handleNavLinkClick('services')} className={cn("nav-link", linkClass)}>Services</button>
//                         <Link to="/rooms" className={cn("nav-link", linkClass)}>Rooms</Link>
//                         <button onClick={() => handleNavLinkClick('gallery')} className={cn("nav-link", linkClass)}>Gallery</button>
//                         <button onClick={() => handleNavLinkClick('contact')} className={cn("nav-link", linkClass)}>Contact Us</button>
//                         <ThemeToggle />
//                     </nav>

//                     {/* Mobile menu toggle */}
//                     <button className={cn("lg:hidden transition-colors", linkClass)} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
//                         {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//                     </button>
//                 </div>
//             </div>

//             {/* Mobile Nav */}
//             {mobileMenuOpen && (
//                 <nav className="lg:hidden bg-white border-t mt-2 py-4 animate-fade-in">
//                     <div className="resort-container flex flex-col space-y-4">
//                         <button onClick={() => handleNavLinkClick('home')} className="nav-link">Home</button>
//                         <button onClick={() => handleNavLinkClick('about')} className="nav-link">About Us</button>
//                         <button onClick={() => handleNavLinkClick('services')} className="nav-link">Services</button>
//                         <Link to="/rooms" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Rooms</Link>
//                         <Link to="/gallery" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Gallery</Link>
//                         <button onClick={() => handleNavLinkClick('contact')} className="nav-link">Contact Us</button>
//                         <ThemeToggle />
//                     </div>
//                 </nav>
//             )}
//         </header>
//     );
// };

// export default Navbar;


import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ThemeToggle from './themeToggle';
import mixpanel from 'mixpanel-browser'; // keep it

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        let ticking = false;

        const updateScrollProgress = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
            setScrollProgress(scrollPercent);
            ticking = false;
        };

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
            if (!ticking) {
                window.requestAnimationFrame(updateScrollProgress);
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleNavLinkClick = (id: string) => {
        setMobileMenuOpen(false);

        // ✅ Track only if Mixpanel is ready
        if (mixpanel && (mixpanel as any).__loaded) {
            mixpanel.track(`Navbar Click`, {
                section: id,
                path: location.pathname,
                timestamp: new Date().toISOString()
            });
        } else {
            console.warn('Mixpanel not ready, skipped tracking for', id);
        }

        // Navigation Logic
        if (id === 'rooms') {
            navigate('/rooms');
            return;
        }
        if (id === 'gallery') {
            navigate('/gallery');
            return;
        }

        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => scrollToSection(id), 300);
        } else {
            scrollToSection(id);
        }
    };

    const linkClass = isScrolled ? "text-resort-dark hover:text-resort-gold" : "text-white hover:text-resort-gold";

    const mobileNavVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.08,
                duration: 0.3,
                ease: 'easeOut'
            }
        })
    };

    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About Us' },
        { id: 'services', label: 'Services' },
        { id: 'rooms', label: 'Rooms' },
        { id: 'gallery', label: 'Gallery' },
        { id: 'contact', label: 'Contact Us' }
    ];

    return (
        <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
            {/* Scroll Progress Bar */}
            <div
                className="absolute bottom-0 left-0 h-[4px] bg-resort-gold z-50"
                style={{ width: `${scrollProgress}%`, transition: 'width 0.2s ease-out' }}
            ></div>

            <div className={cn("transition-all duration-300 w-full", isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4")}>
                <div className="resort-container flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <div className="relative">
                            <span className={cn("text-2xl md:text-3xl font-playfair font-bold", linkClass)}>Maitreya</span>
                            <span className="absolute -bottom-2 right-0 text-xs uppercase tracking-widest text-resort-gold">Resort</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        {navItems.map(({ id, label }) =>
                            id === 'rooms' || id === 'gallery' ? (
                                <Link key={id} to={`/${id}`} className={cn("nav-link", linkClass)}>{label}</Link>
                            ) : (
                                <button key={id} onClick={() => handleNavLinkClick(id)} className={cn("nav-link", linkClass)}>{label}</button>
                            )
                        )}
                        <ThemeToggle />
                    </nav>

                    {/* Mobile toggle */}
                    <button className={cn("lg:hidden transition-colors", linkClass)} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <motion.div
                    className="lg:hidden bg-white border-t mt-2 py-6"
                    initial="hidden"
                    animate="visible"
                >
                    <div className="resort-container flex flex-col space-y-4 items-center text-center">
                        {navItems.map(({ id, label }, index) => (
                            <motion.button
                                key={id}
                                onClick={() => handleNavLinkClick(id)}
                                className="nav-link w-full"
                                custom={index}
                                variants={mobileNavVariants}
                            >
                                {label}
                            </motion.button>
                        ))}
                        <ThemeToggle />
                    </div>
                </motion.div>
            )}
        </header>
    );
};

export default Navbar;


