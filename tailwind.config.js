/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // YouTube 라이트 테마 팔레트
        yt: {
          red: '#ff0000',
          ink: '#0f0f0f', // 기본 텍스트
          sub: '#606060', // 보조 텍스트
          chip: '#f2f2f2', // 칩/버튼 배경
          'chip-hover': '#e5e5e5',
          border: '#e5e5e5',
          blue: '#065fd4', // 링크/더보기
        },
      },
      fontFamily: {
        sans: ['Roboto', '"Noto Sans KR"', 'system-ui', 'sans-serif'],
        serif: ['Roboto', '"Noto Sans KR"', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease forwards',
      },
    },
  },
  plugins: [],
}
