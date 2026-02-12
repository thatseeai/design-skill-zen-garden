import { StandardShowcase } from "@/components/StandardShowcase"
import { SkillPanel } from "@/components/SkillPanel"
import { styles } from "./styles"
import { themeStyles, themeClassName } from "./theme"
import skillMd from "./skill.md?raw"

export default function StyleRPage() {
  return (
    <>
      <style>{themeStyles}</style>
      <div className={`${themeClassName} bg-background text-foreground min-h-screen`}>
        <div className="pointer-events-none fixed left-[6vw] top-24 z-[1] h-28 w-36 rounded-[48%_52%_44%_56%/48%_42%_58%_52%] bg-[#cdd8be]/45 blur-[1px]" />
        <div className="pointer-events-none fixed right-[8vw] top-40 z-[1] h-20 w-28 rounded-[58%_42%_60%_40%/40%_60%_40%_60%] bg-[#7a5a3b]/18" />
        <div className="pointer-events-none fixed bottom-20 left-[12vw] z-[1] h-16 w-24 rounded-[44%_56%_48%_52%/56%_42%_58%_44%] bg-[#5f8a57]/22 hidden md:block" />
        <div className="pointer-events-none fixed bottom-16 right-[10vw] z-[1] h-14 w-20 rounded-[50%_50%_42%_58%/46%_54%_46%_54%] bg-[#cdd8be]/34 hidden md:block" />

        <div className="relative z-10">
          <StandardShowcase styles={styles} pageName="Style R: Organic Wellness" />
        </div>
        <SkillPanel skillContent={skillMd} />
      </div>
    </>
  )
}
