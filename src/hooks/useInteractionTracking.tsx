import { useEffect } from 'react';

const useInteractionTracking = () => {
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            console.log(`Scrolled: ${scrollPercent.toFixed(2)}%`);
            // You can send this data to analytics or store it as needed
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const trackCTA = (label: string) => {
        console.log(`CTA Clicked: ${label}`);
        // You can send this data to analytics or store it as needed
    };

    return { trackCTA };
};

export default useInteractionTracking;
