import { StandardShowcase } from "@/components/StandardShowcase"
import { SkillPanel } from "@/components/SkillPanel"
import { styles } from "./styles"
import { themeStyles, themeClassName } from "./theme"
import skillMd from "./skill.md?raw"

export default function StylePPage() {
  return (
    <>
      <style>{themeStyles}</style>
      <div className={`${themeClassName} bg-background text-foreground min-h-screen`}>
        <div className="pointer-events-none fixed left-8 top-24 z-[1] h-16 w-16 rounded-full bg-[#65d8ff]/80 border-4 border-white shadow-[0_0_0_3px_#8f78c4]" />
        <div className="pointer-events-none fixed right-12 top-36 z-[1] h-14 w-14 rounded-[14px] rotate-12 bg-[#ffd84d]/90 border-4 border-white shadow-[0_0_0_3px_#8f78c4]" />
        <div className="pointer-events-none fixed left-14 bottom-28 z-[1] h-14 w-14 rounded-full bg-[#8ce99a]/85 border-4 border-white shadow-[0_0_0_3px_#8f78c4] hidden md:block" />
        <div className="pointer-events-none fixed right-10 bottom-20 z-[1] h-12 w-12 rounded-[10px] -rotate-6 bg-[#ff5f8a]/85 border-4 border-white shadow-[0_0_0_3px_#8f78c4] hidden md:block" />

        <div className="relative z-10">
          <StandardShowcase styles={styles} pageName="Style P: Retro Sticker Pop" />
        </div>
        <SkillPanel skillContent={skillMd} />
      </div>
    </>
  )
}
