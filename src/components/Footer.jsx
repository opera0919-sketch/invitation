import { wedding } from '../weddingConfig'

// 공유하기 + 마무리
export default function Footer() {
  const share = async () => {
    const data = {
      title: `${wedding.groom.short} ♥ ${wedding.bride.short} 결혼합니다`,
      text: `${wedding.date.text} ${wedding.date.time}`,
      url: window.location.href,
    }
    if (navigator.share) {
      try {
        await navigator.share(data)
      } catch {
        /* 사용자가 취소 */
      }
    } else {
      navigator.clipboard?.writeText(window.location.href)
      alert('링크가 복사되었습니다.')
    }
  }

  return (
    <footer className="bg-sage-deep px-7 py-14 text-center text-white">
      <p className="font-serif text-xl">
        {wedding.groom.short} <span className="mx-2">♥</span> {wedding.bride.short}
      </p>
      <p className="mt-2 font-sans text-sm text-white/80">
        {wedding.date.text} {wedding.date.time}
      </p>
      <button
        onClick={share}
        className="mt-8 rounded-full bg-white/15 px-8 py-3 font-sans text-sm backdrop-blur active:scale-95"
      >
        💌 청첩장 공유하기
      </button>
      <p className="mt-10 font-sans text-[11px] tracking-widest text-white/50">
        THANK YOU FOR CELEBRATING WITH US
      </p>
    </footer>
  )
}
