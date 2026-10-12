/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_MIXPANEL_TOKEN: string;
    readonly VITE_BOOKING_API_BASE_URL?: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
