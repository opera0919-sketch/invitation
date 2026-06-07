// 하단에서 올라오는 시트 (유튜브 모바일 메뉴 느낌)
export default function BottomSheet({ open, onClose, title, children }) {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center" onClick={onClose}>
      <div className="absolute inset-0 bg-black/40" />
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative z-10 max-h-[85vh] w-full max-w-[480px] animate-fadeIn overflow-y-auto rounded-t-2xl bg-white pb-6"
      >
        <div className="sticky top-0 flex items-center justify-between border-b border-yt-border bg-white px-4 py-3">
          <h3 className="text-base font-semibold text-yt-ink">{title}</h3>
          <button onClick={onClose} className="text-2xl leading-none text-yt-sub">
            ✕
          </button>
        </div>
        <div className="px-4 pt-4">{children}</div>
      </div>
    </div>
  )
}
