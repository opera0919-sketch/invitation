import { useReveal } from './hooks/useReveal'
import BgmToggle from './components/BgmToggle'
import Hero from './components/Hero'
import Greeting from './components/Greeting'
import Calendar from './components/Calendar'
import Gallery from './components/Gallery'
import Location from './components/Location'
import Rsvp from './components/Rsvp'
import Accounts from './components/Accounts'
import Guestbook from './components/Guestbook'
import Footer from './components/Footer'

// 섹션 사이 장식 구분선
const Divider = () => (
  <div className="flex items-center justify-center gap-3 py-2 text-sage/60">
    <span className="h-px w-10 bg-sage/30" />
    <span className="text-xs">❋</span>
    <span className="h-px w-10 bg-sage/30" />
  </div>
)

export default function App() {
  useReveal()
  return (
    <div className="font-sans text-ink">
      <BgmToggle />
      <Hero />
      <Greeting />
      <Divider />
      <Calendar />
      <Gallery />
      <Divider />
      <Location />
      <Rsvp />
      <Accounts />
      <Guestbook />
      <Footer />
    </div>
  )
}
