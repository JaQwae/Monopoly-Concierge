import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import dotenv from 'dotenv';
import { VitePluginRadar } from 'vite-plugin-radar';
dotenv.config();


export default defineConfig({
  plugins: [
    react(),
    VitePluginRadar({
      analytics: {
        id: process.env.VITE_GOOGLE_ANALYTICS_ID,
      },
      enableDev: true,
    }),
  ],
});
