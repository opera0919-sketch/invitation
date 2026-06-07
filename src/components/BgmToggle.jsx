import { useEffect, useRef, useState } from 'react'
import { wedding } from '../weddingConfig'

// 배경음악 — YouTube IFrame API로 오디오만 재생 (우상단 토글)
// 영상: https://www.youtube.com/watch?v=byN1OfaEfvU
export default function BgmToggle() {
  const playerRef = useRef(null)
  const [on, setOn] = useState(false)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    // YouTube IFrame API 스크립트 1회 로드
    const init = () => {
      playerRef.current = new window.YT.Player('bgm-yt', {
        videoId: wedding.bgmYoutubeId,
        playerVars: { autoplay: 0, loop: 1, playlist: wedding.bgmYoutubeId, controls: 0 },
        events: { onReady: () => setReady(true) },
      })
    }

    if (window.YT && window.YT.Player) {
      init()
    } else {
      const tag = document.createElement('script')
      tag.src = 'https://www.youtube.com/iframe_api'
      document.body.appendChild(tag)
      window.onYouTubeIframeAPIReady = init
    }
  }, [])

  const toggle = () => {
    const p = playerRef.current
    if (!ready || !p) return
    if (on) {
      p.pauseVideo()
    } else {
      p.unMute()
      p.setVolume(60)
      p.playVideo()
    }
    setOn(!on)
  }

  return (
    <>
      {/* 화면 밖에 숨긴 오디오 소스 */}
      <div className="pointer-events-none fixed -left-[9999px] -top-[9999px] h-1 w-1 overflow-hidden">
        <div id="bgm-yt" />
      </div>

      <button
        onClick={toggle}
        aria-label="배경음악"
        className="fixed right-3 top-3 z-40 flex h-10 w-10 items-center justify-center rounded-full bg-black/25 text-white backdrop-blur"
      >
        <span className={on ? 'inline-block animate-spin-slow' : ''}>♪</span>
      </button>
    </>
  )
}
