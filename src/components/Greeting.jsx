import { wedding } from '../weddingConfig'
import Section from './Section'

// 인사말 + 양가 혼주 소개
export default function Greeting() {
  const { groom, bride, greeting } = wedding
  return (
    <Section label="Invitation" title="초대합니다">
      <p className="reveal whitespace-pre-line text-center font-serif text-[15px] leading-[2] text-ink/90">
        {greeting}
      </p>

      <div className="reveal mt-12 flex items-center justify-center gap-2 font-serif text-[15px] text-ink">
        <span className="text-muted text-sm">
          {groom.father} · {groom.mother}
        </span>
        <span className="mx-1 text-xs text-sage-deep">의 아들</span>
        <span className="font-bold">{groom.short}</span>
      </div>
      <div className="reveal mt-3 flex items-center justify-center gap-2 font-serif text-[15px] text-ink">
        <span className="text-muted text-sm">
          {bride.father} · {bride.mother}
        </span>
        <span className="mx-1 text-xs text-sage-deep">의 딸</span>
        <span className="font-bold">{bride.short}</span>
      </div>
    </Section>
  )
}
