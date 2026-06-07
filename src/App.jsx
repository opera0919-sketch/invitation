import { useState } from 'react'
import TopBar from './components/yt/TopBar'
import Player from './components/yt/Player'
import VideoMeta from './components/yt/VideoMeta'
import Description from './components/yt/Description'
import Comments from './components/yt/Comments'
import Recommended from './components/yt/Recommended'
import RsvpSheet from './components/yt/RsvpSheet'
import GiftSheet from './components/yt/GiftSheet'
import MapSheet from './components/yt/MapSheet'

// 유튜브 '영상 시청 페이지' 레이아웃의 모바일 청첩장
export default function App() {
  const [sheet, setSheet] = useState(null) // 'rsvp' | 'gift' | 'map' | null

  return (
    <div className="min-h-screen bg-white font-sans text-yt-ink">
      <TopBar />
      <Player />
      <VideoMeta
        onRsvp={() => setSheet('rsvp')}
        onGift={() => setSheet('gift')}
        onMap={() => setSheet('map')}
      />
      <Description />
      <Comments />
      <Recommended />

      <RsvpSheet open={sheet === 'rsvp'} onClose={() => setSheet(null)} />
      <GiftSheet open={sheet === 'gift'} onClose={() => setSheet(null)} />
      <MapSheet open={sheet === 'map'} onClose={() => setSheet(null)} />
    </div>
  )
}
