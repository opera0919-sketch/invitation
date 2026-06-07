import { useEffect, useState } from 'react'
import { wedding } from '../weddingConfig'
import Section from './Section'

// 달력 UI + D-day 카운트다운
export default function Calendar() {
  const { year, month, day } = wedding.date
  const target = new Date(wedding.date.iso)

  const [dday, setDday] = useState(diff())

  function diff() {
    const now = new Date()
    const ms = target - now
    const d = Math.floor(ms / 86400000)
    const h = Math.floor((ms % 86400000) / 3600000)
    const m = Math.floor((ms % 3600000) / 60000)
    const s = Math.floor((ms % 60000) / 1000)
    return { d, h, m, s }
  }

  useEffect(() => {
    const t = setInterval(() => setDday(diff()), 1000)
    return () => clearInterval(t)
  }, [])

  // 해당 월 달력 그리드 구성
  const first = new Date(year, month - 1, 1).getDay()
  const days = new Date(year, month, 0).getDate()
  const cells = [...Array(first).fill(null), ...Array.from({ length: days }, (_, i) => i + 1)]
  const weekdays = ['일', '월', '화', '수', '목', '금', '토']

  return (
    <Section label="Save the Date" title={wedding.date.text} className="bg-ecru/40">
      <p className="reveal text-center font-serif text-sage-deep -mt-6 mb-8">{wedding.date.time}</p>

      <div className="reveal mx-auto max-w-[300px] rounded-2xl bg-white/70 p-5 shadow-sm">
        <div className="grid grid-cols-7 gap-y-2 text-center">
          {weekdays.map((w, i) => (
            <div
              key={w}
              className={`font-sans text-xs ${i === 0 ? 'text-rose-400' : 'text-muted'}`}
            >
              {w}
            </div>
          ))}
          {cells.map((c, i) => {
            const isDay = c === day
            return (
              <div
                key={i}
                className={`mx-auto flex h-8 w-8 items-center justify-center rounded-full font-serif text-sm
                  ${i % 7 === 0 ? 'text-rose-400' : 'text-ink'}
                  ${isDay ? 'bg-sage text-white font-bold shadow' : ''}`}
              >
                {c || ''}
              </div>
            )
          })}
        </div>
      </div>

      <div className="reveal mt-8 flex justify-center gap-3 text-center">
        {[
          ['DAYS', dday.d],
          ['HOUR', dday.h],
          ['MIN', dday.m],
          ['SEC', dday.s],
        ].map(([label, v]) => (
          <div key={label} className="rounded-xl bg-white/70 px-3 py-2 shadow-sm">
            <div className="font-serif text-xl text-sage-deep tabular-nums">
              {String(Math.max(0, v)).padStart(2, '0')}
            </div>
            <div className="font-sans text-[10px] tracking-widest text-muted">{label}</div>
          </div>
        ))}
      </div>
      <p className="reveal mt-5 text-center font-serif text-sm text-ink/80">
        {wedding.groom.short} ♥ {wedding.bride.short}의 결혼식이{' '}
        {dday.d > 0 ? `${dday.d}일 남았습니다.` : '오늘입니다!'}
      </p>
    </Section>
  )
}
