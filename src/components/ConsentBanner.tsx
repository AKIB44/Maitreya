import { useEffect, useState } from 'react';
import { setUserConsent, hasUserConsented } from '@/lib/consent';
import { initMixpanel } from '@/lib/mixpanel';
import './ConsentBanner.css';

const ConsentBanner = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (!hasUserConsented()) {
            setVisible(true);
        }
    }, []);

    const acceptConsent = () => {
        setUserConsent(true);
        initMixpanel();
        setVisible(false);
    };

    const rejectConsent = () => {
        setUserConsent(false);
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div className="consent-banner">
            <div className="consent-content">
                <span className="consent-text">
                    🍪 We use cookies and analytics to improve your experience. By clicking “Accept”, you agree to our use of analytics for better insights.
                </span>
                <div className="consent-buttons">
                    <button className="accept-btn" onClick={acceptConsent}>Accept</button>
                    <button className="reject-btn" onClick={rejectConsent}>Reject</button>
                </div>
            </div>
        </div>
    );
};

export default ConsentBanner;
