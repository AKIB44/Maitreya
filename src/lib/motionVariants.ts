// src/lib/motionVariants.ts
export const buttonHoverTap = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
    transition: { type: "spring", stiffness: 300, damping: 20 }
};

export const cardHover = {
    whileHover: { scale: 1.02, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" },
    transition: { type: "spring", stiffness: 200, damping: 15 }
};

export const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};
