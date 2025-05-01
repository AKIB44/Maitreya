import { useEffect } from 'react';

const WhatsAppChat = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://apps.elfsight.com/p/platform.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <div className="elfsight-app-e6044268-0144-4d4d-8cf9-4c892aa775d4" />

        </div>
    );
};

export default WhatsAppChat;
