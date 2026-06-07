import { useEffect, useState } from 'react'
import { db } from '../lib/supabase'
import Section from './Section'

// 방명록 — 축하 메시지 작성 + 목록 (Supabase, 현재 mock)
export default function Guestbook() {
  const [list, setList] = useState([])
  const [form, setForm] = useState({ name: '', message: '' })
  const [loading, setLoading] = useState(false)

  const load = () => db.listGuestbook().then(setList)
  useEffect(() => {
    load()
  }, [])

  const submit = async (e) => {
    e.preventDefault()
    if (!form.name.trim() || !form.message.trim()) return alert('이름과 메시지를 입력해 주세요.')
    setLoading(true)
    await db.addGuestbook(form)
    setForm({ name: '', message: '' })
    await load()
    setLoading(false)
  }

  return (
    <Section label="Guestbook" title="축하 메시지">
      <form onSubmit={submit} className="reveal space-y-3">
        <input
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="이름"
          className="w-full rounded-xl border border-ecru bg-white/70 px-4 py-3 font-sans text-sm outline-none focus:border-sage"
        />
        <textarea
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="따뜻한 축하의 말을 남겨주세요."
          rows={3}
          className="w-full resize-none rounded-xl border border-ecru bg-white/70 px-4 py-3 font-sans text-sm outline-none focus:border-sage"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-sage-deep py-3 font-sans text-sm font-bold text-white shadow active:scale-[0.98] disabled:opacity-60"
        >
          {loading ? '등록 중…' : '메시지 남기기'}
        </button>
      </form>

      <div className="reveal mt-8 space-y-3">
        {list.length === 0 && (
          <p className="text-center font-sans text-sm text-muted">첫 번째 축하 메시지를 남겨주세요 🌿</p>
        )}
        {list.map((g) => (
          <div key={g.id} className="rounded-xl bg-ecru/50 px-5 py-4">
            <div className="flex items-center justify-between">
              <span className="font-serif text-sm font-bold text-ink">{g.name}</span>
              <span className="font-sans text-[11px] text-muted">
                {new Date(g.created_at).toLocaleDateString('ko-KR')}
              </span>
            </div>
            <p className="mt-1.5 whitespace-pre-line font-sans text-sm leading-relaxed text-ink/80">
              {g.message}
            </p>
          </div>
        ))}
      </div>
    </Section>
  )
}
