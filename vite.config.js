import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base는 GitHub Pages 배포 시 저장소 이름으로 맞춰주세요. (예: '/invitation/')
export default defineConfig({
  plugins: [react()],
  base: './',
})
