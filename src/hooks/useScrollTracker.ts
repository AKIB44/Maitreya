// src/hooks/useScrollTracker.ts
import { useEffect } from "react";
import mixpanel from "mixpanel-browser";

const useScrollTracker = () => {
    useEffect(() => {
        const sectionIds = ["home", "about", "services", "gallery", "contact"];

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (
                        entry.isIntersecting &&
                        mixpanel &&
                        (mixpanel as any).__loaded
                    ) {
                        const sectionId = entry.target.id;
                        mixpanel.track("Section Viewed", {
                            section: sectionId,
                            timestamp: new Date().toISOString(),
                            path: window.location.pathname,
                        });
                    }
                });
            },
            { threshold: 0.5 }
        );

        sectionIds.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);
};

export default useScrollTracker;
