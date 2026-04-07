import { StandardShowcase } from "@/components/StandardShowcase"
import { SkillPanel } from "@/components/SkillPanel"
import { styles } from "./styles"
import { themeStyles, themeClassName } from "./theme"
import skillMd from "./skill.md?raw"

export default function StyleSPage() {
  return (
    <>
      <style>{themeStyles}</style>
      <div className={`${themeClassName} bg-background text-foreground min-h-screen`}>
        {/* 매화 가지 장식 — 좌상단 */}
        <svg className="pointer-events-none fixed left-[4vw] top-16 z-[1] w-32 h-40 opacity-[0.12] dark:opacity-[0.08]" viewBox="0 0 120 150" fill="none">
          <path d="M60 140 C58 110, 40 80, 30 50 C26 38, 34 20, 50 14 C56 12, 64 12, 70 14 C86 20, 94 38, 90 50 C80 80, 62 110, 60 140Z" stroke="#C83E3E" strokeWidth="1.2" fill="none"/>
          <circle cx="38" cy="36" r="6" fill="#C83E3E" opacity="0.3"/>
          <circle cx="50" cy="18" r="4.5" fill="#C83E3E" opacity="0.25"/>
          <circle cx="70" cy="22" r="5" fill="#C83E3E" opacity="0.28"/>
          <circle cx="82" cy="40" r="5.5" fill="#C83E3E" opacity="0.22"/>
          <circle cx="58" cy="28" r="3" fill="#C5A55A" opacity="0.4"/>
        </svg>

        {/* 복주머니 실루엣 — 우하단 */}
        <svg className="pointer-events-none fixed right-[6vw] bottom-20 z-[1] w-24 h-28 opacity-[0.08] dark:opacity-[0.06] hidden md:block" viewBox="0 0 90 110" fill="none">
          <path d="M45 8 C38 8, 28 12, 25 22 L20 48 C18 62, 24 78, 36 88 C40 92, 50 92, 54 88 C66 78, 72 62, 70 48 L65 22 C62 12, 52 8, 45 8Z" stroke="#C5A55A" strokeWidth="1.5" fill="none"/>
          <path d="M35 22 Q45 30 55 22" stroke="#C5A55A" strokeWidth="1" fill="none"/>
          <line x1="45" y1="8" x2="45" y2="2" stroke="#C83E3E" strokeWidth="1"/>
          <path d="M40 2 C42 0, 48 0, 50 2" stroke="#C83E3E" strokeWidth="0.8" fill="none"/>
        </svg>

        {/* 금박 점 장식 — 우상단 */}
        <div className="pointer-events-none fixed right-[10vw] top-28 z-[1] hidden md:block">
          <div className="h-2 w-2 rounded-full bg-[#C5A55A]/20 dark:bg-[#C5A55A]/12 mb-3" />
          <div className="h-1.5 w-1.5 rounded-full bg-[#C5A55A]/15 dark:bg-[#C5A55A]/08 ml-3 mb-4" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#C5A55A]/18 dark:bg-[#C5A55A]/10 -ml-1" />
        </div>

        <div className="relative z-10">
          <StandardShowcase styles={styles} pageName="Style S: Korean Seollal" />
        </div>
        <SkillPanel skillContent={skillMd} />
      </div>
    </>
  )
}
