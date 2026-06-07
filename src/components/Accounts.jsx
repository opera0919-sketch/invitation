import { useState } from 'react'
import { wedding } from '../weddingConfig'
import Section from './Section'

// 마음 전하실 곳 — 양가 계좌 (아코디언 + 원터치 복사)
export default function Accounts() {
  const [open, setOpen] = useState(null)
  const groups = [
    { label: '신랑측', person: wedding.groom },
    { label: '신부측', person: wedding.bride },
  ]

  const copy = (text) => {
    navigator.clipboard?.writeText(text)
    alert('계좌번호가 복사되었습니다.')
  }

  return (
    <Section label="Gift" title="마음 전하실 곳" className="bg-ecru/40">
      <p className="reveal -mt-6 mb-8 text-center font-sans text-sm leading-relaxed text-ink/70">
        축하의 마음을 전하고 싶으신 분들을 위해
        <br />
        계좌번호를 안내드립니다.
      </p>

      <div className="reveal space-y-3">
        {groups.map((g, i) => {
          const a = g.person.account
          const isOpen = open === i
          return (
            <div key={g.label} className="overflow-hidden rounded-xl bg-white/70 shadow-sm">
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between px-5 py-4 font-sans text-sm text-ink"
              >
                <span>
                  <span className="text-sage-deep">{g.label}</span> {g.person.short}
                </span>
                <span className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}>⌄</span>
              </button>
              {isOpen && (
                <div className="border-t border-ecru px-5 py-4">
                  <p className="font-sans text-sm text-ink">
                    {a.bank} {a.number}
                  </p>
                  <p className="font-sans text-xs text-muted">예금주 {a.holder}</p>
                  <button
                    onClick={() => copy(`${a.bank} ${a.number}`)}
                    className="mt-3 w-full rounded-lg bg-sage/15 py-2 font-sans text-sm text-sage-deep active:scale-95"
                  >
                    계좌번호 복사
                  </button>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </Section>
  )
}
