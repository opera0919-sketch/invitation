import { wedding } from '../../weddingConfig'

// 상단 영상 플레이어 — BGM 영상을 16:9로 임베드 (재생 시 음악도 함께)
export default function Player() {
  const id = wedding.bgmYoutubeId
  return (
    <div className="relative aspect-video w-full bg-black">
      <iframe
        className="absolute inset-0 h-full w-full"
        src={`https://www.youtube.com/embed/${id}?rel=0&playsinline=1`}
        title={wedding.yt.videoTitle}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}
