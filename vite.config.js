import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.REACT_APP_RAPID_API_KEY': JSON.stringify('357c38e107msh1b7e8bb9d7698c0p1ef42bjsnabf0f8a8dbe3')
  }
})
