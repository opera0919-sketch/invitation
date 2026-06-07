// 유튜브 상단 바 (로고 + 아이콘)
export default function TopBar() {
  return (
    <header className="sticky top-0 z-40 flex items-center justify-between bg-white px-3 py-2.5">
      <div className="flex items-center gap-1">
        <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
          <path
            fill="#ff0000"
            d="M21.6 7.2a2.7 2.7 0 0 0-1.9-1.9C18 4.8 12 4.8 12 4.8s-6 0-7.7.5A2.7 2.7 0 0 0 2.4 7.2 28 28 0 0 0 2 12a28 28 0 0 0 .4 4.8 2.7 2.7 0 0 0 1.9 1.9c1.7.5 7.7.5 7.7.5s6 0 7.7-.5a2.7 2.7 0 0 0 1.9-1.9A28 28 0 0 0 22 12a28 28 0 0 0-.4-4.8z"
          />
          <path fill="#fff" d="M10 15V9l5 3-5 3z" />
        </svg>
        <span className="text-lg font-medium tracking-tight text-yt-ink">
          YouTube
          <sup className="ml-0.5 text-[9px] text-yt-sub">KR</sup>
        </span>
      </div>
      <div className="flex items-center gap-4 text-yt-ink">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
          <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 1 0-.7.7l.27.28v.79l5 5 1.49-1.5-5-5zm-6 0A4.5 4.5 0 1 1 14 9.5 4.5 4.5 0 0 1 9.5 14z" />
        </svg>
        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
          <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5S10.5 3.17 10.5 4v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
        </svg>
      </div>
    </header>
  )
}
