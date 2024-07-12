import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5000,
    open: true,
    proxy : {
      "/graphql": {
        // Ask Ben what localhost graphql is using
        target: "https://localhost:5000",
        changeOrigin: true,
        secure: false,
      }
    }
  }
})
