import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Cookies from 'js-cookie';

const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [showPreferences, setShowPreferences] = useState(false);
    const [preferences, setPreferences] = useState({
        analytics: true,
        marketing: true
    });

    useEffect(() => {
        const consent = Cookies.get('maitreya_cookie_consent');
        if (!consent) setIsVisible(true);
    }, []);

    const handleAcceptAll = () => {
        Cookies.set('maitreya_cookie_consent', 'accepted', { expires: 365 });
        console.log('Cookies accepted: all');
        setIsVisible(false);
    };

    const handleRejectAll = () => {
        Cookies.set('maitreya_cookie_consent', 'rejected', { expires: 365 });
        console.log('Cookies rejected: all');
        setIsVisible(false);
    };

    const handleSavePreferences = () => {
        Cookies.set('maitreya_cookie_consent', JSON.stringify(preferences), { expires: 365 });
        console.log('Cookies saved:', preferences);
        setIsVisible(false);
    };

    const togglePreference = (key: keyof typeof preferences) => {
        setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/30 backdrop-blur-sm px-4"
                >
                    <div className="w-full max-w-md bg-white p-5 rounded-xl shadow-2xl border border-gray-200 text-sm">
                        <p className="text-gray-800 mb-4">
                            We use cookies to enhance your experience. You can manage your preferences or accept all.
                        </p>

                        <div className="flex flex-wrap gap-2 justify-end">
                            <button
                                onClick={handleRejectAll}
                                className="px-4 py-1.5 bg-gray-100 hover:bg-gray-200 rounded transition"
                            >
                                Reject All
                            </button>
                            <button
                                onClick={() => setShowPreferences((prev) => !prev)}
                                className="px-4 py-1.5 bg-blue-50 hover:bg-blue-100 rounded transition"
                            >
                                Preferences
                            </button>
                            <button
                                onClick={handleAcceptAll}
                                className="px-4 py-1.5 bg-resort-gold text-white hover:bg-yellow-600 rounded transition"
                            >
                                Accept All
                            </button>
                        </div>

                        <AnimatePresence>
                            {showPreferences && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="overflow-hidden border-t pt-3 mt-3 border-gray-200"
                                >
                                    <div className="flex items-center justify-between mb-2">
                                        <span>Analytics Cookies</span>
                                        <input
                                            type="checkbox"
                                            checked={preferences.analytics}
                                            onChange={() => togglePreference('analytics')}
                                            className="accent-resort-gold"
                                        />
                                    </div>
                                    <div className="flex items-center justify-between mb-2">
                                        <span>Marketing Cookies</span>
                                        <input
                                            type="checkbox"
                                            checked={preferences.marketing}
                                            onChange={() => togglePreference('marketing')}
                                            className="accent-resort-gold"
                                        />
                                    </div>
                                    <div className="text-right mt-2">
                                        <button
                                            onClick={handleSavePreferences}
                                            className="px-4 py-1.5 bg-resort-gold text-white hover:bg-yellow-600 rounded transition text-sm"
                                        >
                                            Save Preferences
                                        </button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CookieConsent;
