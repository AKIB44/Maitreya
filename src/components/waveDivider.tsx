// src/components/WaveDivider.tsx
import React from 'react';

const WaveDivider = ({
    flip = false,
    color = '#fff',
    className = '',
}: {
    flip?: boolean;
    color?: string;
    className?: string;
}) => {
    return (
        <div className={`${flip ? 'rotate-180' : ''} ${className}`}>
            <svg
                className="w-full h-16 md:h-32"
                viewBox="0 0 1440 320"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
            >
                <path
                    fill={color}
                    fillOpacity="1"
                    d="M0,96L48,128C96,160,192,224,288,234.7C384,245,480,203,576,186.7C672,171,768,181,864,202.7C960,224,1056,256,1152,256C1248,256,1344,224,1392,208L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                ></path>
            </svg>
        </div>
    );
};

export default WaveDivider;
