import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
    server: {
        host: "::",
        port: 8080,
        allowedHosts: [
            'd416-49-248-126-138.ngrok-free.app'
        ],
        historyApiFallback: true,
    },
    plugins: [
        react(),
        mode === 'development' && componentTagger(),
    ].filter(Boolean),
    base: '/',
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
            "react": path.resolve("./node_modules/react"),
            "react-dom": path.resolve("./node_modules/react-dom")
        },
    },
}));
