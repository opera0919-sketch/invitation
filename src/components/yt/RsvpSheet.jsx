import { useState } from 'react'
import { db } from '../../lib/supabase'
import BottomSheet from './BottomSheet'

// 참석 의사 전달 (구독/참석 확인 버튼에서 열림)
export default function RsvpSheet({ open, onClose }) {
  const [form, setForm] = useState({ side: '신랑측', name: '', attend: 'Y', count: 1, meal: '식사함' })
  const [done, setDone] = useState(false)
  const [loading, setLoading] = useState(false)

  const submit = async () => {
    if (!form.name.trim()) return alert('성함을 입력해 주세요.')
    setLoading(true)
    await db.submitRsvp(form)
    setLoading(false)
    setDone(true)
  }

  const seg = (val, cur, set, label) => (
    <button
      onClick={set}
      className={`flex-1 rounded-lg py-2.5 text-sm font-medium transition ${
        val === cur ? 'bg-yt-ink text-white' : 'bg-yt-chip text-yt-ink'
      }`}
    >
      {label}
    </button>
  )

  return (
    <BottomSheet open={open} onClose={onClose} title="참석 의사 전달">
      {done ? (
        <div className="py-10 text-center">
          <p className="text-lg font-semibold text-yt-ink">감사합니다 🎉</p>
          <p className="mt-2 text-sm text-yt-sub">소중한 마음 잘 전달받았습니다.</p>
          <button
            onClick={onClose}
            className="mt-6 rounded-full bg-yt-ink px-6 py-2.5 text-sm font-medium text-white"
          >
            닫기
          </button>
        </div>
      ) : (
        <div className="space-y-4 pb-2">
          <div className="flex gap-2">
            {seg('신랑측', form.side, () => setForm({ ...form, side: '신랑측' }), '신랑측')}
            {seg('신부측', form.side, () => setForm({ ...form, side: '신부측' }), '신부측')}
          </div>
          <input
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="성함"
            className="w-full rounded-lg border border-yt-border px-4 py-3 text-sm outline-none focus:border-yt-ink"
          />
          <div className="flex gap-2">
            {seg('Y', form.attend, () => setForm({ ...form, attend: 'Y' }), '참석')}
            {seg('N', form.attend, () => setForm({ ...form, attend: 'N' }), '불참')}
          </div>
          {form.attend === 'Y' && (
            <div className="flex gap-2">
              <select
                value={form.count}
                onChange={(e) => setForm({ ...form, count: e.target.value })}
                className="flex-1 rounded-lg border border-yt-border px-4 py-3 text-sm outline-none"
              >
                {[1, 2, 3, 4, 5].map((n) => (
                  <option key={n} value={n}>
                    {n}명 참석
                  </option>
                ))}
              </select>
              <select
                value={form.meal}
                onChange={(e) => setForm({ ...form, meal: e.target.value })}
                className="flex-1 rounded-lg border border-yt-border px-4 py-3 text-sm outline-none"
              >
                <option>식사함</option>
                <option>식사안함</option>
                <option>미정</option>
              </select>
            </div>
          )}
          <button
            onClick={submit}
            disabled={loading}
            className="w-full rounded-full bg-yt-red py-3.5 text-sm font-semibold text-white disabled:opacity-60"
          >
            {loading ? '전송 중…' : '참석 의사 전달하기'}
          </button>
        </div>
      )}
    </BottomSheet>
  )
}
