import { useState } from 'react'
import { wedding } from '../weddingConfig'
import Section from './Section'

// 갤러리 — 그리드 + 탭하면 전체화면 슬라이드
export default function Gallery() {
  const photos = wedding.gallery
  const [open, setOpen] = useState(null)

  const move = (dir) => setOpen((i) => (i + dir + photos.length) % photos.length)

  return (
    <Section label="Gallery" title="우리의 순간">
      <div className="reveal grid grid-cols-3 gap-1.5">
        {photos.map((src, i) => (
          <button
            key={i}
            onClick={() => setOpen(i)}
            className="aspect-square overflow-hidden rounded-md"
          >
            <img
              src={src}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-300 active:scale-95"
            />
          </button>
        ))}
      </div>

      {open !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={() => setOpen(null)}
        >
          <button
            className="absolute left-3 top-1/2 -translate-y-1/2 px-4 py-2 text-3xl text-white/80"
            onClick={(e) => {
              e.stopPropagation()
              move(-1)
            }}
          >
            ‹
          </button>
          <img src={photos[open]} alt="" className="max-h-[85vh] max-w-[90vw] object-contain" />
          <button
            className="absolute right-3 top-1/2 -translate-y-1/2 px-4 py-2 text-3xl text-white/80"
            onClick={(e) => {
              e.stopPropagation()
              move(1)
            }}
          >
            ›
          </button>
          <div className="absolute bottom-6 left-0 right-0 text-center font-sans text-sm text-white/70">
            {open + 1} / {photos.length}
          </div>
        </div>
      )}
    </Section>
  )
}
