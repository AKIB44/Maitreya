const CONSENT_KEY = 'user_tracking_consent';

export const hasUserConsented = (): boolean => {
    return localStorage.getItem(CONSENT_KEY) === 'true';
};

export const setUserConsent = (consent: boolean) => {
    localStorage.setItem(CONSENT_KEY, consent.toString());
};

export const clearUserConsent = () => {
    localStorage.removeItem(CONSENT_KEY);
};
