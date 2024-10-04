// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Default is 'dist', you can keep this or specify a different folder
    emptyOutDir: true, // Clears out old build files before building new ones
  },
  root: 'client', // Ensure the root is set to the 'client' directory if your Vite config is inside it
})

