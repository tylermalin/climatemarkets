import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  define: {
    // Ensure environment variables are properly handled
    'process.env': {}
  },
  server: {
    headers: {
      // Override any CSP headers to allow Web3Modal eval
      'Content-Security-Policy': 'default-src * \'unsafe-inline\' \'unsafe-eval\' data: blob:;'
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          wagmi: ['wagmi', '@wagmi/core'],
          web3: ['@web3modal/wagmi', '@web3modal/react']
        }
      }
    }
  }
});
