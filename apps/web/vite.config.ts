import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true,
    port: 5173,
  },
  plugins: [react(), tsconfigPaths()],
});
