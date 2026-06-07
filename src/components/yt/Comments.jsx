import { useEffect, useState } from 'react'
import { db } from '../../lib/supabase'

const colors = ['#ff7043', '#42a5f5', '#66bb6a', '#ab47bc', '#ec407a', '#26a69a']
const initial = (name) => name.trim().charAt(0).toUpperCase() || '?'
const ago = (iso) => {
  const days = Math.floor((Date.now() - new Date(iso)) / 86400000)
  if (days <= 0) return '오늘'
  if (days < 30) return `${days}일 전`
  return `${Math.floor(days / 30)}개월 전`
}

// 방명록 = 유튜브 댓글
export default function Comments() {
  const [list, setList] = useState([])
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [focused, setFocused] = useState(false)
  const [loading, setLoading] = useState(false)

  const load = () => db.listGuestbook().then(setList)
  useEffect(() => {
    load()
  }, [])

  const submit = async () => {
    if (!name.trim() || !message.trim()) return alert('이름과 메시지를 입력해 주세요.')
    setLoading(true)
    await db.addGuestbook({ name, message })
    setName('')
    setMessage('')
    setFocused(false)
    await load()
    setLoading(false)
  }

  return (
    <section className="mt-2 px-3 pt-4">
      <div className="flex items-center gap-2">
        <h2 className="text-base font-semibold text-yt-ink">댓글</h2>
        <span className="text-sm text-yt-sub">{list.length}</span>
        <span className="ml-1 text-xs text-yt-sub">· 축하 메시지</span>
      </div>

      {/* 입력 */}
      <div className="mt-4 flex gap-3">
        <div
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-medium text-white"
          style={{ background: '#909090' }}
        >
          나
        </div>
        <div className="flex-1">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            onFocus={() => setFocused(true)}
            placeholder="이름"
            className="w-full border-b border-yt-border pb-1 text-sm outline-none focus:border-yt-ink"
          />
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onFocus={() => setFocused(true)}
            placeholder="축하 댓글 추가..."
            className="mt-2 w-full border-b border-yt-border pb-1 text-sm outline-none focus:border-yt-ink"
          />
          {focused && (
            <div className="mt-2 flex justify-end gap-2">
              <button
                onClick={() => {
                  setFocused(false)
                  setName('')
                  setMessage('')
                }}
                className="rounded-full px-3 py-1.5 text-sm font-medium text-yt-sub"
              >
                취소
              </button>
              <button
                onClick={submit}
                disabled={loading}
                className="rounded-full bg-yt-blue px-4 py-1.5 text-sm font-medium text-white disabled:opacity-50"
              >
                {loading ? '등록 중…' : '댓글'}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* 목록 */}
      <div className="mt-5 space-y-5 pb-10">
        {list.length === 0 && (
          <p className="text-sm text-yt-sub">첫 번째 축하 댓글을 남겨주세요 🎉</p>
        )}
        {list.map((g, i) => (
          <div key={g.id} className="flex gap-3">
            <div
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-medium text-white"
              style={{ background: colors[i % colors.length] }}
            >
              {initial(g.name)}
            </div>
            <div className="flex-1">
              <p className="text-xs text-yt-sub">
                @{g.name} <span className="ml-1">{ago(g.created_at)}</span>
              </p>
              <p className="mt-0.5 whitespace-pre-line text-sm text-yt-ink">{g.message}</p>
              <div className="mt-1.5 flex items-center gap-4 text-yt-sub">
                <span className="text-xs">👍</span>
                <span className="text-xs">👎</span>
                <span className="text-xs font-medium">답글</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
