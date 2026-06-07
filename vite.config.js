import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages 프로젝트 페이지 경로 (저장소 이름). 슬래시 없는 주소에서도 에셋이 깨지지 않도록 절대경로 사용
export default defineConfig({
  plugins: [react()],
  base: '/invitation/',
})
