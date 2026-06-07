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
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/70" />

      <div className="relative z-10 flex h-full flex-col items-center justify-between py-16 text-white">
        <div className="text-center animate-fadeUp">
          <p className="font-sans text-[11px] font-light tracking-[0.45em] text-sage-deep">
            WE ARE GETTING MARRIED
          </p>
        </div>

        <div className="text-center animate-fadeUp" style={{ animationDelay: '0.3s' }}>
          <h1 className="font-sans text-[42px] font-extralight leading-tight tracking-wide drop-shadow-lg">
            {groom.short}
            <span className="mx-4 align-middle text-2xl font-thin text-sage-deep">&</span>
            {bride.short}
          </h1>
        </div>

        <div className="space-y-1.5 text-center animate-fadeUp" style={{ animationDelay: '0.6s' }}>
          <p className="font-sans text-sm font-light tracking-[0.15em]">{date.text}</p>
          <p className="font-sans text-sm font-light tracking-[0.15em] text-white/85">
            {date.time} · {venue.hall}
          </p>
          <div className="mx-auto mt-6 h-8 w-px bg-white/40" />
        </div>
      </div>
    </header>
  )
}
