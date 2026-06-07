import { useState } from 'react'
import { wedding } from '../../weddingConfig'
import Icon from './Icon'

function dday() {
  const ms = new Date(wedding.date.iso) - new Date()
  const d = Math.ceil(ms / 86400000)
  return d > 0 ? `D-${d}` : d === 0 ? 'D-DAY' : '결혼식 완료'
}

// 칩 버튼 (좋아요/공유/저장 등)
function Chip({ icon, label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex shrink-0 items-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-medium transition
        ${active ? 'bg-yt-ink text-white' : 'bg-yt-chip text-yt-ink active:bg-yt-chip-hover'}`}
    >
      <Icon name={icon} size={20} />
      {label}
    </button>
  )
}

// 영상 제목 + 조회수/날짜 + 채널 행 + 액션 칩
export default function VideoMeta({ onRsvp, onGift, onMap }) {
  const { yt, date, venue } = wedding
  const [liked, setLiked] = useState(false)
  const [likes, setLikes] = useState(248)

  const share = async () => {
    const data = {
      title: yt.videoTitle,
      text: `${date.text} ${date.time} · ${venue.hall}`,
      url: window.location.href,
    }
    if (navigator.share) {
      try {
        await navigator.share(data)
      } catch {
        /* 취소 */
      }
    } else {
      navigator.clipboard?.writeText(window.location.href)
      alert('링크가 복사되었습니다.')
    }
  }

  const toggleLike = () => {
    setLiked((v) => !v)
    setLikes((n) => (liked ? n - 1 : n + 1))
  }

  return (
    <div className="px-3 pt-3">
      <h1 className="text-base font-semibold leading-snug text-yt-ink">{yt.videoTitle}</h1>
      <p className="mt-1 text-[13px] text-yt-sub">
        조회수 {dday()} · {date.text.replace('년 ', '. ').replace('월 ', '. ').replace('일', '')}
      </p>

      {/* 채널 행 */}
      <div className="mt-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={yt.avatar} alt="" className="h-10 w-10 rounded-full object-cover" />
          <div className="leading-tight">
            <p className="text-sm font-medium text-yt-ink">{yt.channelName}</p>
            <p className="text-xs text-yt-sub">{yt.subscribers}</p>
          </div>
        </div>
        <button
          onClick={onRsvp}
          className="flex items-center gap-1.5 rounded-full bg-yt-ink px-4 py-2 text-sm font-medium text-white active:opacity-80"
        >
          <Icon name="bell" size={18} />
          참석 확인
        </button>
      </div>

      {/* 액션 칩 (가로 스크롤) */}
      <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
        <div className="flex shrink-0 items-center rounded-full bg-yt-chip">
          <button
            onClick={toggleLike}
            className={`flex items-center gap-1.5 rounded-l-full py-2 pl-3.5 pr-2.5 text-sm font-medium ${
              liked ? 'text-yt-blue' : 'text-yt-ink'
            }`}
          >
            <Icon name="like" size={20} filled={liked} /> {likes}
          </button>
          <span className="h-5 w-px bg-yt-chip-hover" />
          <span className="px-3 py-2 text-yt-sub">
            <Icon name="like" size={20} className="rotate-180" />
          </span>
        </div>
        <Chip icon="share" label="공유" onClick={share} />
        <Chip icon="location" label="오시는 길" onClick={onMap} />
        <Chip icon="save" label="마음 전하기" onClick={onGift} />
      </div>
    </div>
  )
}
