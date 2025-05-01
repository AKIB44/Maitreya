// src/lib/mixpanel.ts
import mixpanel from 'mixpanel-browser';
import { hasUserConsented } from './consent';

const MIXPANEL_TOKEN = import.meta.env.VITE_MIXPANEL_TOKEN;

// 🔥 Master Switch (enable/disable tracking globally)
export const TRACKING_ENABLED = true;

export const initMixpanel = () => {
    if (!MIXPANEL_TOKEN) {
        console.warn('Mixpanel token not found in environment');
        return;
    }

    // if (!TRACKING_ENABLED || !hasUserConsented()) {
    //     console.info('Tracking disabled or no consent yet.');
    //     return;
    // }

    mixpanel.init(MIXPANEL_TOKEN, {
        debug: true,
        track_pageview: false,
    });

    try {
        const distinctId = mixpanel.get_distinct_id();
        mixpanel.identify(distinctId);

        mixpanel.people.set({
            'Browser': navigator.userAgent,
            'Language': navigator.language,
            'Platform': navigator.platform,
            'Screen Size': `${window.innerWidth}x${window.innerHeight}`,
        });

        fetch('https://ipapi.co/json/')
            .then(res => res.json())
            .then(data => {
                mixpanel.people.set({
                    'IP': data.ip,
                    'City': data.city,
                    'Region': data.region,
                    'Country': data.country_name,
                    'Latitude': data.latitude,
                    'Longitude': data.longitude,
                    'Timezone': data.timezone,
                });
            })
            .catch(err => console.warn('Location fetch failed:', err));

    } catch (e) {
        console.error('Mixpanel initialization error:', e);
    }
};

export const identifyUser = (userId: string, userData?: Record<string, any>) => {
    // if (!TRACKING_ENABLED || !hasUserConsented()) return;
    if (!mixpanel?.__loaded) return;

    try {
        mixpanel.identify(userId);

        mixpanel.people.set({
            $name: userData?.name || '',
            $email: userData?.email || '',
            $created: userData?.created_at || new Date().toISOString(),
            browser: navigator.userAgent,
            platform: navigator.platform,
            language: navigator.language,
            screen: `${window.screen.width}x${window.screen.height}`,
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        });
    } catch (e) {
        console.error('Mixpanel identifyUser failed:', e);
    }
};

export const trackEvent = (event: string, data: any = {}) => {
    // if (!TRACKING_ENABLED || !hasUserConsented()) return;
    if (!mixpanel?.__loaded) return;

    try {
        mixpanel.track(event, {
            ...data,
            screen_resolution: `${window.innerWidth}x${window.innerHeight}`,
            user_agent: navigator.userAgent,
            language: navigator.language,
        });
    } catch (e) {
        console.error('Mixpanel tracking failed:', e);
    }
};

export const trackFirstVisit = () => {
    trackEvent('First Page Visit', {
        browser: navigator.userAgent,
        platform: navigator.platform,
        screen: `${window.screen.width}x${window.screen.height}`,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        language: navigator.language,
    });
};

export default mixpanel;
