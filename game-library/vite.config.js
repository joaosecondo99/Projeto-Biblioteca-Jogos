import { defineConfig } from 'vite'

export default defineConfig({
  preview: {
    allowedHosts: ['projeto-biblioteca-jogos.onrender.com'],
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})