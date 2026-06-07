// 공통 섹션 래퍼 — 작은 영문 라벨 + 한글 제목
export default function Section({ label, title, children, className = '' }) {
  return (
    <section className={`px-7 py-16 ${className}`}>
      <div className="reveal text-center">
        {label && (
          <p className="font-sans text-[11px] font-medium tracking-[0.4em] text-sage uppercase mb-4">
            {label}
          </p>
        )}
        {title && (
          <h2 className="font-sans text-[22px] font-light tracking-wide text-ink mb-10">{title}</h2>
        )}
      </div>
      {children}
    </section>
  )
}
