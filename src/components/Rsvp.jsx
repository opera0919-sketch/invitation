import { useState } from 'react'
import { db } from '../lib/supabase'
import Section from './Section'

// 참석여부(RSVP) — Supabase(현재 mock)로 전송
export default function Rsvp() {
  const [form, setForm] = useState({
    side: '신랑측',
    name: '',
    attend: 'Y',
    count: 1,
    meal: '식사함',
  })
  const [done, setDone] = useState(false)
  const [loading, setLoading] = useState(false)

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  const submit = async (e) => {
    e.preventDefault()
    if (!form.name.trim()) return alert('성함을 입력해 주세요.')
    setLoading(true)
    await db.submitRsvp(form)
    setLoading(false)
    setDone(true)
  }

  if (done) {
    return (
      <Section label="R.S.V.P" title="참석 의사 전달">
        <div className="reveal rounded-2xl bg-sage/10 py-10 text-center">
          <p className="font-serif text-lg text-sage-deep">감사합니다 🌿</p>
          <p className="mt-2 font-sans text-sm text-ink/70">소중한 마음 잘 전달받았습니다.</p>
        </div>
      </Section>
    )
  }

  const chip = (active) =>
    `flex-1 rounded-xl py-2.5 font-sans text-sm transition ${
      active ? 'bg-sage text-white shadow' : 'bg-white/70 text-muted'
    }`

  return (
    <Section label="R.S.V.P" title="참석 의사 전달">
      <p className="reveal -mt-6 mb-8 text-center font-sans text-sm leading-relaxed text-ink/70">
        예식 준비에 도움이 되도록
        <br />
        참석 여부를 미리 알려주시면 감사하겠습니다.
      </p>

      <form onSubmit={submit} className="reveal space-y-4">
        <div className="flex gap-2">
          {['신랑측', '신부측'].map((s) => (
            <button
              type="button"
              key={s}
              onClick={() => setForm({ ...form, side: s })}
              className={chip(form.side === s)}
            >
              {s}
            </button>
          ))}
        </div>

        <input
          value={form.name}
          onChange={set('name')}
          placeholder="성함"
          className="w-full rounded-xl border border-ecru bg-white/70 px-4 py-3 font-sans text-sm outline-none focus:border-sage"
        />

        <div className="flex gap-2">
          {[
            ['Y', '참석'],
            ['N', '불참'],
          ].map(([v, label]) => (
            <button
              type="button"
              key={v}
              onClick={() => setForm({ ...form, attend: v })}
              className={chip(form.attend === v)}
            >
              {label}
            </button>
          ))}
        </div>

        {form.attend === 'Y' && (
          <div className="flex gap-2">
            <select
              value={form.count}
              onChange={set('count')}
              className="flex-1 rounded-xl border border-ecru bg-white/70 px-4 py-3 font-sans text-sm outline-none"
            >
              {[1, 2, 3, 4, 5].map((n) => (
                <option key={n} value={n}>
                  {n}명 참석
                </option>
              ))}
            </select>
            <select
              value={form.meal}
              onChange={set('meal')}
              className="flex-1 rounded-xl border border-ecru bg-white/70 px-4 py-3 font-sans text-sm outline-none"
            >
              <option>식사함</option>
              <option>식사안함</option>
              <option>미정</option>
            </select>
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-sage-deep py-3.5 font-sans text-sm font-bold text-white shadow active:scale-[0.98] disabled:opacity-60"
        >
          {loading ? '전송 중…' : '참석 의사 전달하기'}
        </button>
      </form>
    </Section>
  )
}
