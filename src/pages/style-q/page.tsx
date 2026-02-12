import { StandardShowcase } from "@/components/StandardShowcase"
import { SkillPanel } from "@/components/SkillPanel"
import { styles } from "./styles"
import { themeStyles, themeClassName } from "./theme"
import skillMd from "./skill.md?raw"

export default function StyleQPage() {
  return (
    <>
      <style>{themeStyles}</style>
      <div className={`${themeClassName} bg-background text-foreground min-h-screen`}>
        <div className="pointer-events-none fixed left-[8vw] top-20 z-[1] h-24 w-24 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.45)_0%,rgba(255,255,255,0)_70%)]" />
        <div className="pointer-events-none fixed right-[10vw] top-28 z-[1] h-16 w-44 rotate-[-8deg] rounded-[999px] bg-[linear-gradient(90deg,rgba(255,255,255,0.55)_0%,rgba(255,255,255,0.08)_100%)]" />
        <div className="pointer-events-none fixed bottom-20 left-[14vw] z-[1] h-12 w-12 rounded-full border border-[#9adfff]/62 bg-[#5ee3ff]/25" />
        <div className="pointer-events-none fixed bottom-28 right-[18vw] z-[1] h-10 w-10 rounded-full border border-[#ffc1e8]/65 bg-[#ff7ac8]/22" />

        <div className="relative z-10">
          <StandardShowcase styles={styles} pageName="Style Q: Y2K Glossy UI" />
        </div>
        <SkillPanel skillContent={skillMd} />
      </div>
    </>
  )
}
