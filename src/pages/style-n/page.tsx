import { StandardShowcase } from "@/components/StandardShowcase"
import { SkillPanel } from "@/components/SkillPanel"
import { styles } from "./styles"
import { themeStyles, themeClassName } from "./theme"
import skillMd from "./skill.md?raw"

export default function StyleNPage() {
  return (
    <>
      <style>{themeStyles}</style>
      <div className={`${themeClassName} bg-background text-foreground min-h-screen`}>
        <div className="pointer-events-none fixed left-0 top-24 z-[1] h-px w-[36vw] bg-[#b6905d]/70" />
        <div className="pointer-events-none fixed right-0 top-32 z-[1] h-px w-[20vw] bg-[#b6905d]/55 hidden md:block" />
        <div className="pointer-events-none fixed left-[8vw] bottom-14 z-[1] h-9 w-[1px] bg-[#b6905d]/45 hidden lg:block" />

        <div className="relative z-10">
          <StandardShowcase styles={styles} pageName="Style N: Luxury Editorial" />
        </div>
        <SkillPanel skillContent={skillMd} />
      </div>
    </>
  )
}
