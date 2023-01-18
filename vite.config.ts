import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import federation from '@originjs/vite-plugin-federation';
import initializeExposes from './configs/remotes.config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'life-invader',
      filename: 'remoteEntry.js',
      exposes: initializeExposes(),
      shared: ['react'],
    }),
  ],
})
