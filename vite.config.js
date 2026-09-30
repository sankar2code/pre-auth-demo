import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // Served under https://sankar.work/pre-auth-demo/ (a GitHub Pages project
  // site, not the domain root), so every asset URL needs this prefix.
  base: '/pre-auth-demo/',
  plugins: [react(), tailwindcss()],
  build: {
    // Second entry: the standalone popup that renders the source packet PDF.
    rollupOptions: {
      input: { main: 'index.html', packetViewer: 'packet-viewer.html' },
    },
  },
})
