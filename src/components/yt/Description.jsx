import { useEffect, useState } from 'react'
import { wedding } from '../../weddingConfig'

function useCountdown() {
  const [t, setT] = useState(calc)
  function calc() {
    const ms = new Date(wedding.date.iso) - new Date()
    return {
      d: Math.max(0, Math.floor(ms / 86400000)),
      h: Math.max(0, Math.floor((ms % 86400000) / 3600000)),
      m: Math.max(0, Math.floor((ms % 3600000) / 60000)),
    }
  }
  useEffect(() => {
    const i = setInterval(() => setT(calc()), 60000)
    return () => clearInterval(i)
  }, [])
  return t
}

// 유튜브 설명란 스타일 — 접힘/펼침
export default function Description() {
  const [open, setOpen] = useState(false)
  const { greeting, date, venue, groom, bride } = wedding
  const c = useCountdown()

  return (
    <div className="px-3 pt-3">
      <div
        className="rounded-xl bg-yt-chip p-3 text-sm text-yt-ink"
        onClick={() => !open && setOpen(true)}
      >
        {/* 고정 헤더: 카운트다운 + 예식 요약 */}
        <div className="flex items-baseline gap-2 font-semibold">
          <span>{date.text}</span>
          <span className="text-yt-sub">{date.time}</span>
        </div>
        <p className="mt-0.5 font-medium text-yt-sub">
          {venue.hall} · 예식까지 {c.d}일 {c.h}시간
        </p>

        {!open ? (
          <button className="mt-2 font-medium text-yt-ink">...더보기</button>
        ) : (
          <div className="mt-3 space-y-4 leading-relaxed">
            <p className="whitespace-pre-line text-yt-ink/90">{greeting}</p>

            <div className="text-yt-sub">
              <p className="font-medium text-yt-ink">혼주</p>
              <p className="mt-1">
                {groom.father} · {groom.mother}의 아들 <b className="text-yt-ink">{groom.short}</b>
              </p>
              <p>
                {bride.father} · {bride.mother}의 딸 <b className="text-yt-ink">{bride.short}</b>
              </p>
            </div>

            <div className="text-yt-sub">
              <p className="font-medium text-yt-ink">예식 안내</p>
              <p className="mt-1">📍 {venue.hall}</p>
              <p>🗺️ {venue.address}</p>
              <p>☎️ {venue.tel}</p>
            </div>

            <div className="text-yt-sub">
              <p className="font-medium text-yt-ink">오시는 길</p>
              <p className="mt-1">🚇 2호선 잠실(종합운동장)역 인근</p>
              <p>🅿️ 건물 내 주차 가능 (2시간 무료)</p>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation()
                setOpen(false)
              }}
              className="font-medium text-yt-ink"
            >
              간략히
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
