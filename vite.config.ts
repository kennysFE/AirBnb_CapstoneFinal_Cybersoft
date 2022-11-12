import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import sassDts from 'vite-plugin-sass-dts'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: true,
  },
  plugins: [react(), sassDts()],
  server: {
    host: true,
    open: false,
  },
  define: {
    "global": {},
  },
  resolve: {
    alias: [
        {
            // this is required for the SCSS modules
            find: /^~(.*)$/,
            replacement: '$1',
        },
    ],
},
  // basis:'/capstone_react_shoes/'
})
