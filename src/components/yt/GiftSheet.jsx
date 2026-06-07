import { useState } from 'react'
import { wedding } from '../../weddingConfig'
import BottomSheet from './BottomSheet'
import Icon from './Icon'

// 마음 전하실 곳 — 양가 계좌
export default function GiftSheet({ open, onClose }) {
  const [tab, setTab] = useState(0)
  const groups = [
    { label: '신랑측', person: wedding.groom },
    { label: '신부측', person: wedding.bride },
  ]
  const a = groups[tab].person.account

  const copy = () => {
    navigator.clipboard?.writeText(`${a.bank} ${a.number}`)
    alert('계좌번호가 복사되었습니다.')
  }

  return (
    <BottomSheet open={open} onClose={onClose} title="마음 전하실 곳">
      <div className="mb-4 flex gap-2">
        {groups.map((g, i) => (
          <button
            key={g.label}
            onClick={() => setTab(i)}
            className={`flex-1 rounded-lg py-2.5 text-sm font-medium ${
              tab === i ? 'bg-yt-ink text-white' : 'bg-yt-chip text-yt-ink'
            }`}
          >
            {g.label} {g.person.short}
          </button>
        ))}
      </div>

      <div className="rounded-xl border border-yt-border p-4">
        <p className="text-sm text-yt-sub">{a.bank}</p>
        <p className="mt-1 text-lg font-semibold text-yt-ink">{a.number}</p>
        <p className="mt-0.5 text-sm text-yt-sub">예금주 {a.holder}</p>
        <button
          onClick={copy}
          className="mt-4 flex w-full items-center justify-center gap-1.5 rounded-full bg-yt-chip py-3 text-sm font-medium text-yt-ink active:bg-yt-chip-hover"
        >
          <Icon name="copy" size={18} /> 계좌번호 복사
        </button>
      </div>
      <p className="mt-3 pb-2 text-center text-xs text-yt-sub">
        축하의 마음을 전하고 싶으신 분들을 위해 안내드립니다.
      </p>
    </BottomSheet>
  )
}
