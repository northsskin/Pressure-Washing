import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // Use relative asset paths so the site works whether it's deployed at the
  // domain root OR under a subpath (e.g. GitHub Pages project sites served
  // from /<repo>/). Absolute "/assets/..." URLs would 404 under a subpath and
  // leave a blank white page.
  base: './',
  plugins: [react()],
})
