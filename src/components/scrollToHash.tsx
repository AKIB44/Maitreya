import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToHash = () => {
    const location = useLocation();
    useEffect(() => {
        if (window.location.hash) {
            const id = window.location.hash.replace('#', '');
            setTimeout(() => {
                const el = document.getElementById(id);
                if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 300);
        }
    }, []);
    return null;
};

export default ScrollToHash;
