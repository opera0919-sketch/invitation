# 모바일 청첩장 (Mobile Wedding Invitation)

모바일에 최적화된 세로 원페이지 청첩장. **React + Vite + Tailwind CSS** 로 제작했으며,
RSVP·방명록 데이터는 **Supabase** 연동을 전제로 설계했습니다. (현재는 디자인 시안 — `localStorage` mock)

## 빠른 시작

```bash
npm install
npm run dev      # 개발 서버
npm run build    # dist/ 정적 빌드
```

## 구성 (세로 스크롤 순서)

| 섹션 | 기능 |
|------|------|
| Hero | 메인 사진, 신랑신부, 예식 정보 (페이드 인) |
| 인사말 | 초대 문구 + 양가 혼주 |
| 캘린더 | 달력 UI + D-day 카운트다운 |
| 갤러리 | 3열 그리드 + 전체화면 슬라이드 |
| 오시는 길 | 지도 + 네이버/카카오/티맵 길찾기 + 교통 |
| RSVP | 참석여부 폼 (신랑/신부측·인원·식사) |
| 마음 전하실 곳 | 양가 계좌 아코디언 + 원터치 복사 |
| 방명록 | 축하 메시지 작성·목록 |
| Footer | 공유하기 (Web Share API) |

## 내용 수정

모든 텍스트·사진·계좌·일정은 [`src/weddingConfig.js`](src/weddingConfig.js) 한 곳에서 수정합니다.

## Supabase 연동 (다음 단계)

`src/lib/supabase.js` 상단 주석 참고. 필요한 테이블:

- `rsvp(id, side, name, count, attend, meal, message, created_at)`
- `guestbook(id, name, message, created_at)`

## 배포

`npm run build` 후 `dist/` 를 GitHub Pages / Netlify / Vercel 등에 업로드.
GitHub Pages 사용 시 `vite.config.js` 의 `base` 를 저장소 경로로 설정하세요.
