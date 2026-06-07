import { wedding } from '../weddingConfig'

// 인트로 — 메인 사진 + 이름 + 예식 정보 (페이드 인 애니메이션)
export default function Hero() {
  const { groom, bride, date, venue, hero } = wedding
  return (
    <header className="relative h-[100svh] min-h-[560px] w-full overflow-hidden">
      <img
        src={hero}
        alt=""
        className="absolute inset-0 h-full w-full object-cover animate-fadeIn"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/45" />

      <div className="relative z-10 flex h-full flex-col items-center justify-between py-14 text-white">
        <div className="text-center animate-fadeUp">
          <p className="font-sans text-[12px] tracking-[0.4em]">WE ARE GETTING MARRIED</p>
        </div>

        <div className="text-center animate-fadeUp" style={{ animationDelay: '0.3s' }}>
          <h1 className="font-serif text-4xl leading-tight drop-shadow">
            {groom.short}
            <span className="mx-3 text-3xl align-middle">♥</span>
            {bride.short}
          </h1>
        </div>

        <div
          className="text-center animate-fadeUp space-y-1"
          style={{ animationDelay: '0.6s' }}
        >
          <p className="font-sans text-sm tracking-wider">{date.text}</p>
          <p className="font-sans text-sm tracking-wider">
            {date.time} · {venue.hall.split(' ')[0]}
          </p>
        </div>
      </div>
    </header>
  )
}
