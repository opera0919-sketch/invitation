// ─────────────────────────────────────────────
// Supabase 연동 지점 (현재는 디자인 시안용 mock)
//
// 실제 연동 시:
//   1) npm i @supabase/supabase-js
//   2) .env 에 VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY 추가
//   3) 아래 mock 을 createClient 로 교체
//
//   import { createClient } from '@supabase/supabase-js'
//   export const supabase = createClient(
//     import.meta.env.VITE_SUPABASE_URL,
//     import.meta.env.VITE_SUPABASE_ANON_KEY,
//   )
//
// 필요한 테이블:
//   rsvp(id, side, name, count, attend, meal, message, created_at)
//   guestbook(id, name, message, created_at)
// ─────────────────────────────────────────────

const delay = (ms) => new Promise((r) => setTimeout(r, ms))

// localStorage 기반 임시 저장소 — 백엔드 연결 전까지 동작 확인용
const read = (key) => JSON.parse(localStorage.getItem(key) || '[]')
const write = (key, v) => localStorage.setItem(key, JSON.stringify(v))

export const db = {
  async submitRsvp(payload) {
    await delay(400)
    const list = read('rsvp')
    list.push({ ...payload, id: Date.now(), created_at: new Date().toISOString() })
    write('rsvp', list)
    return { ok: true }
  },
  async listGuestbook() {
    await delay(200)
    return read('guestbook').sort((a, b) => b.id - a.id)
  },
  async addGuestbook({ name, message }) {
    await delay(300)
    const list = read('guestbook')
    const entry = { id: Date.now(), name, message, created_at: new Date().toISOString() }
    list.push(entry)
    write('guestbook', list)
    return entry
  },
}
