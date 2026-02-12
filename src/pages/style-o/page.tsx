import { StandardShowcase } from "@/components/StandardShowcase"
import { SkillPanel } from "@/components/SkillPanel"
import { styles } from "./styles"
import { themeStyles, themeClassName } from "./theme"
import skillMd from "./skill.md?raw"

export default function StyleOPage() {
  return (
    <>
      <style>{themeStyles}</style>
      <div className={`${themeClassName} bg-background text-foreground min-h-screen`}>
        <div className="pointer-events-none fixed left-0 top-24 z-[1] h-28 w-[24vw] min-w-[180px] border-y-2 border-r-2 border-[#00e5ff] bg-[#00e5ff]/8" />
        <div className="pointer-events-none fixed right-0 top-[32vh] z-[1] h-36 w-[18vw] min-w-[140px] border-y-2 border-l-2 border-[#ff3fa4] bg-[#ff3fa4]/10" />
        <div className="pointer-events-none fixed bottom-8 left-[10vw] z-[1] h-4 w-36 bg-[#b8ff2c]/80 shadow-[0_0_20px_rgba(184,255,44,0.45)]" />
        <div className="pointer-events-none fixed bottom-24 right-[14vw] z-[1] h-3 w-24 bg-[#00e5ff]/80 shadow-[0_0_16px_rgba(0,229,255,0.55)]" />

        <div className="relative z-10">
          <StandardShowcase styles={styles} pageName="Style O: Futuristic Brutalism" />
        </div>
        <SkillPanel skillContent={skillMd} />
      </div>
    </>
  )
}
