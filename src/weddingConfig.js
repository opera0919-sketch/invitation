// ─────────────────────────────────────────────
// 청첩장 내용은 모두 여기서 한 번에 수정합니다.
// (사진 URL은 추후 실제 이미지로 교체)
// ─────────────────────────────────────────────
export const wedding = {
  groom: {
    name: '최재경',
    short: '재경',
    phone: '010-1234-5678',
    father: '최강식',
    mother: '고명효',
    account: { bank: '국민은행', number: '123456-78-901234', holder: '최재경' },
  },
  bride: {
    name: '채유나',
    short: '유나',
    phone: '010-8765-4321',
    father: '채철식',
    mother: '조윤희',
    account: { bank: '신한은행', number: '110-234-567890', holder: '채유나' },
  },
  date: {
    iso: '2026-10-25T13:20:00+09:00',
    text: '2026년 10월 25일 일요일',
    time: '오후 1시 20분',
    year: 2026,
    month: 10,
    day: 25,
  },
  venue: {
    hall: '더컨벤션 잠실',
    address: '서울특별시 송파구 올림픽로 240',
    tel: '02-2143-4000',
    // 지도 좌표 (네이버/카카오/티맵 길찾기 링크에 사용)
    lat: 37.5133,
    lng: 127.1028,
    naverMap: 'https://map.naver.com/v5/search/더컨벤션 잠실',
    kakaoMap: 'https://map.kakao.com/?q=더컨벤션 잠실',
    tmap: 'https://tmap.life/',
  },
  greeting: `두 사람이 사랑으로 만나
하나의 가정을 이루게 되었습니다.

귀한 걸음 하시어
축복해 주시면 더없는 기쁨으로
간직하겠습니다.`,
  // 갤러리 — 디자인 시안용 플레이스홀더 (비율 다양하게)
  gallery: [
    'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=80',
    'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80',
    'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=80',
    'https://images.unsplash.com/photo-1525258946800-98cfd641d0de?w=600&q=80',
    'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&q=80',
    'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80',
  ],
  hero: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=900&q=80',
  // 배경음악 (YouTube) — https://www.youtube.com/watch?v=byN1OfaEfvU
  bgmYoutubeId: 'byN1OfaEfvU',
  // 카카오톡 공유 썸네일 — 부케 사진
  kakaoThumb:
    'https://images.unsplash.com/photo-1561593366-a05a3eaa72eb?w=800&q=80',
}
