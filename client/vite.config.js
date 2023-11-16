import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
  };
});
