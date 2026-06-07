/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // 다크 프리미엄 — 차콜 베이스 + 골드 포인트 + 아이보리 텍스트
        cream: '#0E0E11', // 페이지 베이스
        ecru: '#2A2A31', // 보더 / 섹션 틴트
        surface: '#17171B', // 카드 표면
        surface2: '#1F1F25', // 입력/강조 표면
        sage: '#C9A86A', // 골드 액센트
        'sage-deep': '#E2CB97', // 라이트 골드 (라벨/링크)
        gold: '#C9A86A',
        'on-gold': '#16140E', // 골드 위 텍스트
        ink: '#ECE7DD', // 기본 아이보리 텍스트
        muted: '#8B8579',
      },
      fontFamily: {
        // 모던 산세리프 (Pretendard)
        serif: ['Pretendard', 'system-ui', 'sans-serif'],
        sans: ['Pretendard', 'system-ui', 'sans-serif'],
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
