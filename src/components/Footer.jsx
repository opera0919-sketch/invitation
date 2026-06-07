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
    <footer className="border-t border-ecru bg-surface px-7 py-16 text-center">
      <p className="font-serif text-2xl font-light tracking-wide text-ink">
        {wedding.groom.short} <span className="mx-2 text-sage">&</span> {wedding.bride.short}
      </p>
      <p className="mt-3 font-sans text-sm font-light text-muted">
        {wedding.date.text} {wedding.date.time}
      </p>
      <button
        onClick={share}
        className="mt-9 rounded-full border border-sage/50 px-8 py-3 font-sans text-sm text-sage-deep transition active:scale-95"
      >
        청첩장 공유하기
      </button>
      <p className="mt-12 font-sans text-[10px] tracking-[0.3em] text-muted/60">
        THANK YOU FOR CELEBRATING WITH US
      </p>
    </footer>
  )
}
