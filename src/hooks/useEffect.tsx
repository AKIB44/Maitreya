import { useEffect } from 'react';

const useUserLocation = () => {
    useEffect(() => {
        fetch('https://ipapi.co/json/')
            .then(response => response.json())
            .then(data => {
                console.log('User IP and Location:', data);
                // You can store this data in state or context as needed
            })
            .catch(error => console.error('Error fetching IP info:', error));
    }, []);
};

export default useUserLocation;
