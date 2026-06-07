import { wedding } from '../weddingConfig'
import Section from './Section'

// 오시는 길 — 주소 + 지도 앱 길찾기 + 교통 안내
export default function Location() {
  const { venue } = wedding
  const staticMap = `https://staticmap.openstreetmap.de/staticmap.php?center=${venue.lat},${venue.lng}&zoom=16&size=420x240&markers=${venue.lat},${venue.lng},red-pushpin`

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
    <Section label="Location" title="오시는 길" className="bg-ecru/40">
      <div className="reveal text-center">
        <p className="font-serif text-lg text-ink">{venue.hall}</p>
        <button onClick={copyAddr} className="mt-1 font-sans text-sm text-muted underline-offset-4">
          {venue.address} <span className="text-sage-deep">복사</span>
        </button>
        <p className="mt-1 font-sans text-sm text-muted">Tel. {venue.tel}</p>
      </div>

      <div className="reveal mt-6 overflow-hidden rounded-2xl shadow-sm">
        <img src={staticMap} alt="지도" className="w-full" />
      </div>

      <div className="reveal mt-4 grid grid-cols-3 gap-2">
        {apps.map((a) => (
          <a
            key={a.name}
            href={a.url}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-surface py-3 text-center font-sans text-sm text-ink shadow-sm active:scale-95"
          >
            {a.name}
          </a>
        ))}
      </div>

      <div className="reveal mt-8 space-y-4 font-sans text-sm leading-relaxed text-ink/80">
        <div>
          <p className="mb-1 font-bold text-sage-deep">🚇 지하철</p>
          <p>2호선 강남역 3번 출구에서 도보 5분</p>
        </div>
        <div>
          <p className="mb-1 font-bold text-sage-deep">🚌 버스</p>
          <p>간선 146, 360 / 지선 4412 — 강남역 하차</p>
        </div>
        <div>
          <p className="mb-1 font-bold text-sage-deep">🅿️ 주차</p>
          <p>건물 지하 1~3층 주차 가능 (2시간 무료)</p>
        </div>
      </div>
    </Section>
  )
}
