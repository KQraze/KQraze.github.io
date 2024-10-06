interface ImportMetaEnv {
    readonly VITE_API_URL: string;
    readonly VITE_FIREBASE_VAPID_KEY: string;
    readonly VITE_REALM: string;
    readonly VITE_CLIENT_ID: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}