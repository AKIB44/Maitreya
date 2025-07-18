
import { useEffect } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Index from "./pages/Index";
import Rooms from "./pages/Rooms";
import Gallery from "./pages/Gallery";
import NotFound from "./pages/NotFound";

import ScrollToTop from '@/components/scrollToTop';
import CookieConsent from '@/components/CookieConsent';
import FeedbackButton from '@/components/Feedback';
import useUserLocation from './hooks/useEffect';
import mixpanel, { initMixpanel, trackEvent, identifyUser } from '@/lib/mixpanel';

import useScrollTracker from "./hooks/useScrollTracker";
import ConsentBanner from './components/ConsentBanner';
import GDPRConsentBanner from '@/components/GDPRConsentBanner';
import WhatsAppChat from '@/components/WhatsAppChat';


const queryClient = new QueryClient();

const TrackPageView = () => {
    const location = useLocation();

    useEffect(() => {
        initMixpanel();

        setTimeout(() => {
            try {
                if (mixpanel?.__loaded) {
                    mixpanel.identify(mixpanel.get_distinct_id());
                    mixpanel.people.set({
                        "First Visit": new Date().toISOString(),
                    });
                    trackEvent("First Page Visit", { url: window.location.pathname });
                }
            } catch (err) {
                console.error("Mixpanel tracking failed", err);
            }
        }, 500);
    }, []);

    return null;
};

const App = () => {
    useUserLocation();
    useScrollTracker();
    useEffect(() => {
        initMixpanel();
    }, []);

    return (
        <QueryClientProvider client={queryClient}>
            <TooltipProvider>
                <Toaster />
                <Sonner />
                <BrowserRouter basename="/">
                    {/* <GDPRConsentBanner /> */}
                    <ScrollToTop />
                    <TrackPageView />
                    <Routes>
                        <Route path="/" element={<Index />} />
                        <Route path="/rooms" element={<Rooms />} />
                        <Route path="/gallery" element={<Gallery />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                    <CookieConsent />
                    <WhatsAppChat />
                </BrowserRouter>
            </TooltipProvider>
        </QueryClientProvider>
    );
};

export default App;

