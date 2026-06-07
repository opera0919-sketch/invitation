import { useEffect, useRef, useState } from 'react'

// 배경음악 토글 (우상단 고정). 음원 파일은 /public/bgm.mp3 에 넣어주세요.
export default function BgmToggle() {
  const ref = useRef(null)
  const [on, setOn] = useState(false)

  useEffect(() => {
    if (on) ref.current?.play().catch(() => setOn(false))
    else ref.current?.pause()
  }, [on])

  return (
    <>
      <audio ref={ref} loop src="/bgm.mp3" />
      <button
        onClick={() => setOn(!on)}
        aria-label="배경음악"
        className="fixed right-3 top-3 z-40 flex h-10 w-10 items-center justify-center rounded-full bg-black/25 text-white backdrop-blur"
      >
        <span className={on ? 'animate-spin-slow' : ''}>{on ? '♪' : '♪̶'}</span>
      </button>
    </>
  )
}
