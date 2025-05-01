// import React, { useEffect } from 'react';
// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import classicRoom from '@/assets/Room_Img_1.jpeg';
// import deluxeRoom from '@/assets/Room_Img_Deluxe.jpeg';

// const roomTypes = [
//     {
//         id: "classic",
//         name: "AC NON/AC Rooms",
//         price: "2500",
//         capacity: "2 Adults, 1 Children",
//         size: "40 sq.m",
//         description: "Experience luxury in our Executive Suites featuring a separate living area, premium furnishings, panoramic views, and exclusive access to the Executive Lounge.",
//         amenities: ["King-size bed", "Air conditioning", "Free Wi-Fi"],
//         image: classicRoom,
//     },
//     {
//         id: "deluxe",
//         name: "Deluxe AC NON/AC Rooms",
//         price: "3500",
//         capacity: "2 Adults 2 Children",
//         size: "75 sq.m",
//         description: "Our spacious Deluxe Rooms offer the perfect blend of comfort and elegance with premium bedding, a private balcony, and modern amenities.",
//         amenities: ["King-size bed", "Separate living area", "Panoramic views", "Premium toiletries", "Coffee machine", "Work desk", "Free Wi-Fi"],
//         image: deluxeRoom,
//     }
// ];

// const Rooms = () => {
//     useEffect(() => {
//         document.title = "Rooms & Suites - Maitreya Resort";
//     }, []);

//     return (
//         <div className="min-h-screen flex flex-col">
//             <Navbar />
//             <main className="flex-1 pt-24">
//                 <section className="py-16 bg-resort-cream">
//                     <div className="resort-container">
//                         <div className="text-center max-w-3xl mx-auto mb-12">
//                             <h2 className="text-sm uppercase tracking-widest text-resort-gold mb-2">Accommodations</h2>
//                             <h3 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
//                                 Luxury Rooms & Suites
//                             </h3>
//                             <p className="text-resort-dark/80">
//                                 Discover our collection of meticulously designed accommodations, where traditional elegance meets modern luxury.
//                                 Each room is thoughtfully furnished to provide the ultimate comfort during your stay.
//                             </p>
//                         </div>

//                         <Tabs defaultValue="deluxe" className="w-full">
//                             <div className="flex justify-center mb-8">
//                                 <TabsList className="bg-white/50 p-1">
//                                     <TabsTrigger value="classic" className="px-6">Classic Rooms</TabsTrigger>
//                                     <TabsTrigger value="deluxe" className="px-6">Deluxe Rooms</TabsTrigger>
//                                 </TabsList>
//                             </div>

//                             {roomTypes.map((room) => (
//                                 <TabsContent key={room.id} value={room.id} className="animation-fade-in">
//                                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
//                                         <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
//                                             {/* <div className="aspect-video bg-gray-200 mb-6 rounded-md overflow-hidden">
//                                                 <div className="w-full h-full bg-gradient-to-r from-resort-gold/30 to-resort-cream/70 flex items-center justify-center">
//                                                     <p className="text-resort-dark/60 font-medium">Room Image</p>
//                                                 </div>
//                                             </div> */}
//                                             <div className="aspect-video bg-gray-200 mb-6 rounded-md overflow-hidden">
//                                                 <img
//                                                     src={room.image}
//                                                     alt={room.name}
//                                                     className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
//                                                 />
//                                             </div>
//                                             <div className="flex items-center justify-between mb-4">
//                                                 <h4 className="font-playfair text-2xl font-bold">{room.name}</h4>
//                                                 <span className="text-resort-gold text-xl font-medium">{room.price}<span className="text-sm text-resort-dark/60">/night</span></span>
//                                             </div>
//                                             <p className="text-resort-dark/80 mb-6">{room.description}</p>

//                                             <div className="grid grid-cols-2 gap-4 mb-6">
//                                                 <div>
//                                                     <p className="text-sm text-resort-dark/60 mb-1">Room Size</p>
//                                                     <p className="font-medium">{room.size}</p>
//                                                 </div>
//                                                 <div>
//                                                     <p className="text-sm text-resort-dark/60 mb-1">Capacity</p>
//                                                     <p className="font-medium">{room.capacity}</p>
//                                                 </div>
//                                             </div>

//                                             <div className="mb-6">
//                                                 <h5 className="font-medium text-lg mb-2">Amenities</h5>
//                                                 <ul className="grid grid-cols-2 gap-2">
//                                                     {room.amenities.map((amenity, index) => (
//                                                         <li key={index} className="text-sm text-resort-dark/80 flex items-center">
//                                                             <span className="mr-2 text-xs">•</span> {amenity}
//                                                         </li>
//                                                     ))}
//                                                 </ul>
//                                             </div>

//                                             {/* <a href="#book-now" className="btn-primary block text-center w-full">
//                                                 Book Now
//                                             </a> */}
//                                         </div>

//                                         {/* <div className="hidden lg:block bg-gray-200 rounded-lg h-96">
//                                             <div className="w-full h-full bg-gradient-to-r from-resort-gold/30 to-resort-cream/70 rounded-lg flex items-center justify-center">
//                                                 <p className="text-resort-dark/60 font-medium">Room Image Gallery</p>
//                                             </div>
//                                         </div> */}
//                                         <div className="hidden lg:block bg-gray-200 rounded-lg h-96 overflow-hidden">
//                                             <img
//                                                 src={room.image}
//                                                 alt={`${room.name} Gallery`}
//                                                 className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
//                                             />
//                                         </div>
//                                     </div>
//                                 </TabsContent>
//                             ))}
//                         </Tabs>
//                     </div>
//                 </section>
//             </main>
//             <Footer />
//         </div>
//     );
// };

// export default Rooms;

// import React, { useEffect, useState } from 'react';
// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import classicRoom from '@/assets/Room_Img_1.jpeg';
// import classicRoom2 from '@/assets/Room_Img_2.jpeg';
// import deluxeRoom from '@/assets/Room_Img_Deluxe.jpeg';
// import deluxeRoom2 from '@/assets/Room_Img_3.jpeg';

// const roomTypes = [
//     {
//         id: "classic",
//         name: "AC NON/AC Rooms",
//         price: "2500",
//         capacity: "2 Adults, 1 Children",
//         size: "40 sq.m",
//         description: "Experience luxury in our Classic Rooms featuring comfort-focused interiors, relaxing ambiance, and budget-friendly amenities perfect for families and couples.",
//         amenities: ["King-size bed", "Air conditioning", "Free Wi-Fi"],
//         images: [classicRoom, classicRoom2],
//     },
//     {
//         id: "deluxe",
//         name: "Deluxe AC NON/AC Rooms",
//         price: "3500",
//         capacity: "2 Adults 2 Children",
//         size: "75 sq.m",
//         description: "Our spacious Deluxe Rooms offer the perfect blend of comfort and elegance with premium bedding, a private balcony, and modern amenities.",
//         amenities: ["King-size bed", "Separate living area", "Panoramic views", "Premium toiletries", "Coffee machine", "Work desk", "Free Wi-Fi"],
//         images: [deluxeRoom, deluxeRoom2],
//     }
// ];

// const Rooms = () => {
//     const [modalImage, setModalImage] = useState<string | null>(null);

//     useEffect(() => {
//         document.title = "Rooms & Suites - Maitreya Resort";

//         const handleEscape = (e: KeyboardEvent) => {
//             if (e.key === 'Escape') setModalImage(null);
//         };
//         window.addEventListener('keydown', handleEscape);
//         return () => window.removeEventListener('keydown', handleEscape);
//     }, []);

//     return (
//         <div className="min-h-screen flex flex-col relative">
//             <Navbar />
//             <main className="flex-1 pt-24">
//                 <section className="py-16 bg-resort-cream">
//                     <div className="resort-container">
//                         <div className="text-center max-w-3xl mx-auto mb-12">
//                             <h2 className="text-sm uppercase tracking-widest text-resort-gold mb-2">Accommodations</h2>
//                             <h3 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
//                                 Luxury Rooms & Suites
//                             </h3>
//                             <p className="text-resort-dark/80">
//                                 Discover our collection of meticulously designed accommodations, where traditional elegance meets modern luxury.
//                                 Each room is thoughtfully furnished to provide the ultimate comfort during your stay.
//                             </p>
//                         </div>

//                         <Tabs defaultValue="deluxe" className="w-full">
//                             <div className="flex justify-center mb-8">
//                                 <TabsList className="bg-white/50 p-1">
//                                     <TabsTrigger value="classic" className="px-6">Classic Rooms</TabsTrigger>
//                                     <TabsTrigger value="deluxe" className="px-6">Deluxe Rooms</TabsTrigger>
//                                 </TabsList>
//                             </div>

//                             {roomTypes.map((room) => (
//                                 <TabsContent key={room.id} value={room.id} className="animation-fade-in">
//                                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
//                                         <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
//                                             <div className="grid grid-cols-2 gap-4 mb-6">
//                                                 {room.images.map((img, idx) => (
//                                                     <img
//                                                         key={idx}
//                                                         src={img}
//                                                         alt={`${room.name} ${idx + 1}`}
//                                                         onClick={() => setModalImage(img)}
//                                                         className="w-full h-40 object-cover rounded cursor-pointer transition-transform duration-300 hover:scale-105"
//                                                     />
//                                                 ))}
//                                             </div>
//                                             <div className="flex items-center justify-between mb-4">
//                                                 <h4 className="font-playfair text-2xl font-bold">{room.name}</h4>
//                                                 <span className="text-resort-gold text-xl font-medium">{room.price}<span className="text-sm text-resort-dark/60">/night</span></span>
//                                             </div>
//                                             <p className="text-resort-dark/80 mb-6">{room.description}</p>

//                                             <div className="grid grid-cols-2 gap-4 mb-6">
//                                                 <div>
//                                                     <p className="text-sm text-resort-dark/60 mb-1">Room Size</p>
//                                                     <p className="font-medium">{room.size}</p>
//                                                 </div>
//                                                 <div>
//                                                     <p className="text-sm text-resort-dark/60 mb-1">Capacity</p>
//                                                     <p className="font-medium">{room.capacity}</p>
//                                                 </div>
//                                             </div>

//                                             <div className="mb-6">
//                                                 <h5 className="font-medium text-lg mb-2">Amenities</h5>
//                                                 <ul className="grid grid-cols-2 gap-2">
//                                                     {room.amenities.map((amenity, index) => (
//                                                         <li key={index} className="text-sm text-resort-dark/80 flex items-center">
//                                                             <span className="mr-2 text-xs">•</span> {amenity}
//                                                         </li>
//                                                     ))}
//                                                 </ul>
//                                             </div>
//                                         </div>

//                                         <div className="hidden lg:grid grid-cols-1 gap-4 h-96 overflow-hidden rounded-lg">
//                                             {room.images.map((img, idx) => (
//                                                 <img
//                                                     key={idx}
//                                                     src={img}
//                                                     alt={`${room.name} ${idx + 1}`}
//                                                     onClick={() => setModalImage(img)}
//                                                     className="w-full h-full object-cover cursor-pointer rounded transition-transform duration-300 hover:scale-105"
//                                                 />
//                                             ))}
//                                         </div>
//                                     </div>
//                                 </TabsContent>
//                             ))}
//                         </Tabs>
//                     </div>
//                 </section>
//             </main>
//             <Footer />

//             {modalImage && (
//                 <div
//                     className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 cursor-pointer"
//                     onClick={() => setModalImage(null)}
//                 >
//                     <img
//                         src={modalImage}
//                         alt="Enlarged view"
//                         className="max-w-full max-h-full rounded-lg shadow-lg"
//                     />
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Rooms;

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import classicRoomImg from "@/assets/Room_Img_3.jpeg";
import deluxeRoomImg from "@/assets/Room_Img_Deluxe.jpeg";

const categories = ["All", "Classic", "Deluxe"];

const roomTypes = [
    {
        id: "classic-1",
        name: "Classic Room",
        price: "2500",
        category: "Classic",
        image: classicRoomImg,
        description: "Cozy and comfortable for a relaxing stay.",
        amenities: ["AC", "Wi-Fi", "King-size Bed"],
    },
    {
        id: "deluxe-1",
        name: "Deluxe Room",
        price: "3500",
        category: "Deluxe",
        image: deluxeRoomImg,
        description: "Spacious luxury with a private balcony.",
        amenities: ["Balcony", "Mini Fridge", "Premium Linens"],
    },
];

const Rooms = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");

    useEffect(() => {
        document.title = "Rooms & Suites - Maitreya Resort";
    }, []);

    const filteredRooms =
        selectedCategory === "All"
            ? roomTypes
            : roomTypes.filter((room) => room.category === selectedCategory);

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 pt-24 bg-resort-cream">
                <section className="py-20">
                    <div className="resort-container">
                        <div className="text-center mb-10">
                            <h2 className="text-sm uppercase tracking-widest text-resort-gold mb-2">Our Rooms</h2>
                            <h3 className="font-playfair text-3xl md:text-4xl font-bold mb-6">Choose Your Stay</h3>
                        </div>

                        <div className="flex justify-center gap-4 mb-10">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`px-6 py-2 rounded-full font-medium transition-all duration-300 text-sm md:text-base
                                    ${selectedCategory === cat
                                            ? "bg-resort-gold text-white"
                                            : "bg-white text-resort-dark border border-gray-300"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        <motion.div
                            layout
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
                        >
                            <AnimatePresence>
                                {filteredRooms.map((room) => (
                                    <motion.div
                                        key={room.id}
                                        layout
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.4 }}
                                        className="bg-white rounded-xl shadow-lg hover:shadow-xl transition overflow-hidden"
                                    >
                                        <img
                                            src={room.image}
                                            alt={room.name}
                                            className="w-full h-48 sm:h-60 md:h-72 lg:h-80 object-cover rounded-md"
                                        />
                                        <div className="p-6">
                                            <h3 className="text-xl font-bold mb-2 font-playfair">{room.name}</h3>
                                            <p className="text-resort-dark/70 text-sm mb-3">{room.description}</p>
                                            <p className="font-semibold text-resort-gold mb-2">₹{room.price} / night</p>
                                            <ul className="text-sm text-resort-dark/70 space-y-1">
                                                {room.amenities.map((item, i) => (
                                                    <li key={i}>• {item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Rooms;

