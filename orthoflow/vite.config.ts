import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  define: {
    __REACT_APP_EMAILJS_SERVICE_ID__: JSON.stringify(process.env.REACT_APP_EMAILJS_SERVICE_ID),
    __REACT_APP_EMAILJS_TEMPLATE_ID__: JSON.stringify(process.env.REACT_APP_EMAILJS_TEMPLATE_ID),
    __REACT_APP_EMAILJS_PUBLIC_KEY__: JSON.stringify(process.env.REACT_APP_EMAILJS_PUBLIC_KEY),
  },
})
