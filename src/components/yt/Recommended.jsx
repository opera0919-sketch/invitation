import { useState } from 'react'
import { wedding } from '../../weddingConfig'

// 갤러리 = '다음 동영상' 추천 목록 (썸네일 카드)
const captions = [
  ['우리의 시작', '3:24'],
  ['프러포즈 그날', '5:12'],
  ['함께 걷는 길', '4:01'],
  ['웨딩 화보 비하인드', '2:47'],
  ['청혼 여행', '8:30'],
  ['영원히 함께', '6:15'],
]

export default function Recommended() {
  const photos = wedding.gallery
  const [open, setOpen] = useState(null)
  const move = (dir) => setOpen((i) => (i + dir + photos.length) % photos.length)

  return (
    <section className="mt-2 border-t border-yt-border px-3 pt-4">
      <h2 className="mb-3 text-sm font-semibold text-yt-sub">다음 동영상</h2>
      <div className="space-y-3">
        {photos.map((src, i) => (
          <button key={i} onClick={() => setOpen(i)} className="flex w-full gap-2 text-left">
            <div className="relative aspect-video w-40 shrink-0 overflow-hidden rounded-lg">
              <img src={src} alt="" loading="lazy" className="h-full w-full object-cover" />
              <span className="absolute bottom-1 right-1 rounded bg-black/80 px-1 text-[10px] font-medium text-white">
                {captions[i % captions.length][1]}
              </span>
            </div>
            <div className="min-w-0 flex-1">
              <p className="line-clamp-2 text-sm font-medium text-yt-ink">
                {captions[i % captions.length][0]}
              </p>
              <p className="mt-1 text-xs text-yt-sub">{wedding.yt.channelName}</p>
              <p className="text-xs text-yt-sub">조회수 {(i + 1) * 12}만회</p>
            </div>
          </button>
        ))}
      </div>

      {open !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
          onClick={() => setOpen(null)}
        >
          <button
            className="absolute left-2 top-1/2 -translate-y-1/2 px-3 text-4xl text-white/80"
            onClick={(e) => {
              e.stopPropagation()
              move(-1)
            }}
          >
            ‹
          </button>
          <img src={photos[open]} alt="" className="max-h-[85vh] max-w-[92vw] object-contain" />
          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 px-3 text-4xl text-white/80"
            onClick={(e) => {
              e.stopPropagation()
              move(1)
            }}
          >
            ›
          </button>
          <div className="absolute bottom-6 left-0 right-0 text-center text-sm text-white/70">
            {open + 1} / {photos.length}
          </div>
        </div>
      )}
    </section>
  )
}
