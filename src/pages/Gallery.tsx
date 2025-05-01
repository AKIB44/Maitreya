// import React, { useEffect } from 'react';
// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';



// const GalleryItem = ({ category, image }: { category: string; image: string }) => {
//     return (
//         <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden group relative">
//             <img src={image} alt={category} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
//             <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
//                 <span className="text-white font-medium text-lg">{category}</span>
//             </div>
//         </div>
//     );
// };


// const galleryCategories = [
//     "Resort View", "Deluxe Room", "Executive Suite", "Presidential Villa",
//     "Swimming Pool", "Restaurant", "Spa", "Garden", "Beach", "Lobby",
//     "Fitness Center", "Conference Room"
// ];

// const categoryImages = [
//     { category: "Premium Huts", image: bannerImg },
//     { category: "Resort View", image: resortView },
//     { category: "Deluxe Room", image: deluxeRoom },
//     { category: "Classic Room", image: classicRoom },
//     { category: "Our Special Dishes", image: dish1 },
//     { category: "Swimming Pool", image: swimmingPool },
//     { category: "Restaurant", image: restaurant },
//     { category: "Lobby", image: lobby },
// ];


// const Gallery = () => {
//     useEffect(() => {
//         document.title = "Gallery - Maitreya Resort";
//     }, []);

//     return (
//         <div className="min-h-screen flex flex-col">
//             <Navbar />
//             <main className="flex-1 pt-24">
//                 <section className="py-16 bg-resort-cream">
//                     <div className="resort-container">
//                         <div className="text-center max-w-3xl mx-auto mb-12">
//                             <h2 className="text-sm uppercase tracking-widest text-resort-gold mb-2">Photo Gallery</h2>
//                             <h3 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
//                                 Explore Maitreya Resort
//                             </h3>
//                             <p className="text-resort-dark/80">
//                                 Take a visual journey through our luxurious resort. Browse our gallery to get a glimpse of our elegant
//                                 accommodations, stunning facilities, and the serene surroundings that make Maitreya Resort a paradise.
//                             </p>
//                         </div>
//                         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
//                             {categoryImages.map((item, index) => (
//                                 <div key={index} className="relative">
//                                     <GalleryItem category={item.category} image={item.image} />
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </section>
//             </main>
//             <Footer />
//         </div>
//     );
// };

// export default Gallery;


import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import resortView from '@/assets/Night_View.jpeg';
import bannerImg from '@/assets/Main_Banner_Img.jpeg';
import deluxeRoom from '@/assets/Room_Img_Deluxe.jpeg';
import classicRoom from '@/assets/Room_Img_4.jpeg';
import swimmingPool from '@/assets/Swimming_Pool.jpeg';
import restaurant from '@/assets/Dining_Section.jpeg';
import lobby from '@/assets/lobby.jpeg';
import dish1 from '@/assets/Food_Img_1.jpeg';
import dish2 from '@/assets/Food_Img_2.jpeg';
import parking from '@/assets/Back_View.jpeg';
import sweets from '@/assets/Food_Img_4.jpeg';


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';


const categoryImages = [
    { category: "Premium Huts", image: bannerImg },
    { category: "Resort View", image: resortView },
    { category: "Deluxe Room", image: deluxeRoom },
    { category: "Classic Room", image: classicRoom },
    { category: "Our Fish Specials", image: dish1 },
    { category: "Veg Specials", image: dish2 },
    { category: "Sweets", image: sweets },
    { category: "Swimming Pool", image: swimmingPool },
    { category: "Dining Area", image: restaurant },
    { category: "Lobby", image: lobby },
    { category: "Dedicated Parking", image: parking },
];

const GalleryItem = ({
    category,
    image,
    onClick,
}: {
    category: string;
    image: string;
    onClick: () => void;
}) => (
    <div
        onClick={onClick}
        className="aspect-square bg-gray-200 rounded-lg overflow-hidden group relative cursor-pointer"
    >
        <img
            src={image}
            alt={category}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="text-white font-medium text-lg">{category}</span>
        </div>
    </div>
);

<Swiper
    modules={[Navigation, Pagination, Autoplay]}
    spaceBetween={20}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    autoplay={{ delay: 3000 }}
    breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
    }}
    className="rounded-lg"
>
    {categoryImages.map((item, index) => (
        <SwiperSlide key={index}>
            <div className="overflow-hidden rounded-lg shadow-lg group">
                <img
                    src={item.image}
                    alt={item.category}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="p-4 bg-white text-center">
                    <h4 className="text-resort-gold text-lg font-semibold">{item.category}</h4>
                </div>
            </div>
        </SwiperSlide>
    ))}
</Swiper>


const Gallery = () => {
    const [enlargedImage, setEnlargedImage] = useState<string | null>(null);
    const [category, setCategory] = useState<string>('');

    useEffect(() => {
        document.title = "Gallery - Maitreya Resort";
    }, []);

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 pt-24">
                {/* <section className="py-16 bg-resort-cream">
                    <div className="resort-container">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <h2 className="text-sm uppercase tracking-widest text-resort-gold mb-2">Photo Gallery</h2>
                            <h3 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
                                Explore Maitreya Resort
                            </h3>
                            <p className="text-resort-dark/80">
                                Take a visual journey through our luxurious resort. Browse our gallery to get a glimpse of our elegant
                                accommodations, stunning facilities, and the serene surroundings that make Maitreya Resort a paradise.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                            {categoryImages.map((item, index) => (
                                <GalleryItem
                                    key={index}
                                    category={item.category}
                                    image={item.image}
                                    onClick={() => {
                                        setEnlargedImage(item.image);
                                        setCategory(item.category);
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </section> */}
                <section className="py-16 bg-white">
                    <div className="resort-container">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <h2 className="text-sm uppercase tracking-widest text-resort-gold mb-2">Gallery</h2>
                            <h3 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
                                Scroll Through Our Gallery
                            </h3>
                        </div>
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            spaceBetween={20}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 3000 }}
                            breakpoints={{
                                640: { slidesPerView: 1 },
                                768: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 },
                            }}
                            className="rounded-lg"
                        >
                            {categoryImages.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div
                                        onClick={() => {
                                            setEnlargedImage(item.image);
                                            setCategory(item.category);
                                        }}
                                        className="overflow-hidden rounded-lg shadow-lg group cursor-pointer"
                                    >
                                        <img
                                            src={item.image}
                                            alt={item.category}
                                            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                        <div className="p-4 bg-white text-center">
                                            <h4 className="text-resort-gold text-lg font-semibold">
                                                {item.category}
                                            </h4>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </section>

            </main>
            <Footer />

            {/* Lightbox Modal */}
            {enlargedImage && (
                <div
                    className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 transition-all duration-300"
                    onClick={() => setEnlargedImage(null)}
                >
                    <div className="relative max-w-3xl w-full mx-4 md:mx-8">
                        <button
                            onClick={() => setEnlargedImage(null)}
                            className="absolute top-2 right-2 text-white text-xl bg-black/50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black transition"
                        >
                            ✕
                        </button>
                        <img
                            src={enlargedImage}
                            alt={category}
                            className="w-full h-auto rounded-lg shadow-lg transition-all duration-500 scale-100 hover:scale-[1.02]"
                        />
                        <p className="text-white text-center mt-4 text-lg font-medium">{category}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
