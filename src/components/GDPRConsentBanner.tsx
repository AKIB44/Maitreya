import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import mixpanel from '@/lib/mixpanel';

const GDPRConsentBanner = () => {
    const [visible, setVisible] = useState(false);
    const [preferencesOpen, setPreferencesOpen] = useState(false);
    const [analyticsEnabled, setAnalyticsEnabled] = useState(true);

    useEffect(() => {
        const consent = localStorage.getItem('gdpr-consent');
        if (!consent) setVisible(true);
    }, []);

    const handleAcceptAll = () => {
        mixpanel.opt_in_tracking();
        localStorage.setItem('gdpr-consent', 'granted');
        setVisible(false);
    };

    const handleRejectAll = () => {
        mixpanel.opt_out_tracking();
        localStorage.setItem('gdpr-consent', 'denied');
        setVisible(false);
    };

    const handlePreferencesSave = () => {
        if (analyticsEnabled) {
            mixpanel.opt_in_tracking();
        } else {
            mixpanel.opt_out_tracking();
        }

        localStorage.setItem('gdpr-consent', analyticsEnabled ? 'custom-enabled' : 'custom-disabled');
        setPreferencesOpen(false);
        setVisible(false);
    };

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed bottom-4 left-4 z-[60] max-w-[320px] bg-white dark:bg-zinc-900 shadow-lg rounded-lg p-4 text-sm transition-all"
                >
                    <p className="mb-2">
                        We use cookies to improve your experience. You can manage your preferences anytime.
                    </p>

                    {preferencesOpen && (
                        <div className="mb-3 space-y-4 text-sm">
                            <div className="flex items-center justify-between">
                                <span className="text-zinc-700 dark:text-zinc-300">Analytics</span>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={analyticsEnabled}
                                        onChange={() => setAnalyticsEnabled(!analyticsEnabled)}
                                        className="sr-only peer"
                                    />
                                    <div className="w-11 h-6 bg-zinc-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 dark:bg-zinc-700 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-zinc-500 peer-checked:bg-blue-600 relative" />
                                </label>
                            </div>
                        </div>
                    )}

                    <div className="flex justify-between items-center space-x-2">
                        {!preferencesOpen ? (
                            <>
                                <button
                                    className="text-blue-600 hover:underline"
                                    onClick={() => setPreferencesOpen(true)}
                                >
                                    Manage Preferences
                                </button>
                                <div className="ml-auto space-x-2">
                                    <button
                                        onClick={handleRejectAll}
                                        className="px-3 py-1 rounded bg-zinc-200 dark:bg-zinc-700 hover:bg-zinc-300 dark:hover:bg-zinc-600"
                                    >
                                        Reject
                                    </button>
                                    <button
                                        onClick={handleAcceptAll}
                                        className="px-3 py-1 rounded bg-blue-600 text-white hover:bg-blue-700"
                                    >
                                        Accept All
                                    </button>
                                </div>
                            </>
                        ) : (
                            <div className="flex justify-end w-full space-x-2">
                                <button
                                    onClick={() => setPreferencesOpen(false)}
                                    className="text-zinc-500 hover:underline"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handlePreferencesSave}
                                    className="px-3 py-1 rounded bg-green-600 text-white hover:bg-green-700"
                                >
                                    Save Preferences
                                </button>
                            </div>
                        )}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default GDPRConsentBanner;
