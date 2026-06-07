import { wedding } from '../../weddingConfig'
import BottomSheet from './BottomSheet'

// 오시는 길 — 지도 + 길찾기 앱
export default function MapSheet({ open, onClose }) {
  const { venue } = wedding
  const staticMap = `https://staticmap.openstreetmap.de/staticmap.php?center=${venue.lat},${venue.lng}&zoom=16&size=440x220&markers=${venue.lat},${venue.lng},red-pushpin`
  const apps = [
    { name: '네이버지도', url: venue.naverMap },
    { name: '카카오맵', url: venue.kakaoMap },
    { name: '티맵', url: venue.tmap },
  ]
  const copyAddr = () => {
    navigator.clipboard?.writeText(venue.address)
    alert('주소가 복사되었습니다.')
  }

  return (
    <BottomSheet open={open} onClose={onClose} title="오시는 길">
      <div className="overflow-hidden rounded-xl border border-yt-border">
        <img src={staticMap} alt="지도" className="w-full" />
      </div>
      <div className="mt-3 text-center">
        <p className="font-semibold text-yt-ink">{venue.hall}</p>
        <button onClick={copyAddr} className="mt-0.5 text-sm text-yt-sub">
          {venue.address} <span className="text-yt-blue">복사</span>
        </button>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2 pb-2">
        {apps.map((m) => (
          <a
            key={m.name}
            href={m.url}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-yt-chip py-3 text-center text-sm font-medium text-yt-ink active:bg-yt-chip-hover"
          >
            {m.name}
          </a>
        ))}
      </div>
    </BottomSheet>
  )
}
