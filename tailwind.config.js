/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // 뉴트럴 + 세이지 포인트 (요즘 트렌드 톤)
        cream: '#FAF7F2',
        ecru: '#F1EBE2',
        sage: '#9CAF94',
        'sage-deep': '#6E8268',
        ink: '#3A3631',
        muted: '#8C857B',
      },
      fontFamily: {
        serif: ['"Gowun Batang"', 'serif'],
        sans: ['"Gowun Dodum"', 'sans-serif'],
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        floatUp: {
          '0%': { opacity: '0', transform: 'translateY(0) scale(0.6)' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0', transform: 'translateY(-120px) scale(1)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.9s ease forwards',
        fadeIn: 'fadeIn 1.2s ease forwards',
        'spin-slow': 'spin 3s linear infinite',
      },
    },
  },
  plugins: [],
}
